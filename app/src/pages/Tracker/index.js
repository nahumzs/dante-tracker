import React, { Component } from 'react';
import firebase from 'firebase';
import moment from 'moment';

import TagsSources from 'sources/tags';
import TrackerSources from 'sources/trackers';

import PrettyFormRow from 'components/PrettyFormRow';
import PrettyGutter from 'components/PrettyGutter';
import PrettyToast from 'components/PrettyToast';
import PrettyHeader from 'components/PrettyHeader';
import PrettyInput from 'components/PrettyInput';
import PrettyCheckbox from 'components/PrettyCheckbox';
import PrettyCheckboxInput from 'components/PrettyCheckboxInput';
import TrackerButtons from 'components/TrackerButtons';

import { List } from 'immutable';

import {
  PageContainer,
  ButtonLogin,
  ButtonSubmit,
  TimeToTrack,
  Hr
} from 'pages/Tracker/Tracker.styles.js';

class Tracker extends Component {
  state = {
    user: null,
    currentTime: this.time,
    timeSelected: new List(),
    task: '',
    description: '',
    tags: null,
    newTagInputValue: '',
    toastOpen: false,
    toastType: 'info',
  }
  componentDidMount() {
    TagsSources.getAll().then(({payload}) => {
      const keys = Object.keys(payload);
      const lastKey = keys[keys.length-1];

      this.setState({
        tags: payload,
        lastKey,
      });

    });

    TagsSources.onChildAdded(snapshot => {
      if (this.state.lastKey && this.state.lastKey !== snapshot.key) {
        const tags = { [snapshot.key]: snapshot.val() , ...this.state.tags };
        this.setState({ tags });
      }
    });

    TagsSources.onChildRemoved((child) => {
      TagsSources.getAll().then(({payload}) => {
        this.setState({ tags: payload });
      });
    });
  }

  get time() {
    return moment().clone().format('MMM/DD/YYYY hh:mm')
  }

  get timeSelectedToString() {
    if (this.state.timeSelected.size) {
      const minHourStr = (hours) => `${ hours > 0 ? 'hrs': 'min'}`;
      const total = this.state.timeSelected.reduce((accum, currentValue) => accum + currentValue,0);
      const hours = Math.floor(total/60);
      const min = total%60;
      return `${hours}:${min} ${minHourStr(hours)}`;
    }

    return '0:0';
  }

  onKeyPressInTagInput = (e) => {
    if (e.key === 'Enter') {
      const tag = this.state.newTagInputValue;
      TagsSources.find(tag)
        .then(response => response.payload
          ? response
          : TagsSources.save({ label: tag }))
        .then(({payload, message, type}) => {
          // if didn't save it
          if (!payload) {
            this.setState({
              toastOpen: true,
              toastText: message,
              toastType: type,
              newTagInputValue: '',
            });
          }

          this.setState({ newTagInputValue: '' });
        });
    }
  }

  onKeyDownOnTag = (key) => (e) => {
    if (e.key === 'Backspace') {
      TagsSources
      .delete(key)
      .then(({payload, message, type }) => {
        this.setState({
          toastOpen: true,
          toastText: message,
          toastType: type,
        });

        return TagsSources.getAll();
      })
      .then(({payload}) => {
        this.setState({ tags: payload });
      });
    }
  }

  onClickSaveTracker = () => {
    const { task, description, tags } = this.state;
    const log = this.state.timeSelected.reduce((accum, currentValue) => accum + currentValue,0);

    let activeTags = Object
      .keys(tags)
      .filter(key => tags[key].checked)
      .map(k => ({ id: k }));

    TrackerSources.save({
      task,
      description,
      log,
      tags: activeTags,
    }).then(response => {
      this.setState({
        toastOpen: true,
        toastText: response.message,
        toastType: response.type,
      });
      this.resetForm();
    });
  }

  onClickTag = key => () => {
    const tags = {...this.state.tags};
    tags[key].checked = !tags[key].checked;

    this.setState({ tags });
  }

  onChangeInputNewTag = (e) => {
    this.setState({ newTagInputValue: e.target.value });
  }

  onChangeTaskInput = (e) => {
    this.setState({ task: e.target.value });
  }

  onChangeDescriptionInput = (e) => {
    this.setState({ description: e.target.value });
  }

  onTimeSelected = (value) => {
    let timeSelected = this.state.timeSelected.push(value);

    if (value === -1) {
      timeSelected = new List();
    }

    this.setState({ timeSelected });
  }

  onShowTimeExpireToast = () => {
    this.setState({
      toastOpen: false,
    })
  }

  resetForm() {
    const tags = {...this.state.tags};
    Object.keys(tags).forEach(key => {
      tags[key].checked = false;
    });

    this.setState({
      timeSelected: new List(),
      task: '',
      description: '',
      newTagInputValue: '',
      tags,
    });
  }

  renderTags() {
    const { tags } = this.state;
    const input = () => (
      <PrettyCheckboxInput
        key="1"
        value={this.state.newTagInputValue}
        placeholder="add a new tag ..."
        onKeyPress={this.onKeyPressInTagInput}
        onChange={this.onChangeInputNewTag}
      />);

    if (!tags) {
      return input();
    }

    const TagsComponent = Object.keys(tags).map((key) => {
      return (
        <PrettyCheckbox
          key={key}
          id={key}
          label={tags[key].label}
          checked={tags[key].checked || false}
          onClick={this.onClickTag(key)}
          onKeyPress={this.onKeyDownOnTag(key)}
        />
      );
    });

    return [input(), TagsComponent];
  }

  renderLoginLink() {
    if (this.state.user) {
      return(<ButtonLogin onClick={this.signOut}>Sign out</ButtonLogin>);
    }

    return(<ButtonLogin onClick={this.signIn}>Sign in</ButtonLogin>);
  }

  render() {
    return (
      <PageContainer>
        <PrettyToast type={this.state.toastType} open={this.state.toastOpen} onShowTimeExpire={this.onShowTimeExpireToast}>
          { this.state.toastText }
        </PrettyToast>
        <PrettyGutter style={{ display: 'none' }}>
          <PrettyFormRow label={ this.state.user ? "👋👋👋🏽‍" : "🖖🏽"}>
            { this.renderLoginLink() }
          </PrettyFormRow>
        </PrettyGutter>
        <PrettyGutter>
          <PrettyFormRow label="task">
            <PrettyInput value={this.state.task} onChange={this.onChangeTaskInput} />
          </PrettyFormRow>
        </PrettyGutter>
        <PrettyGutter style={{ display: 'none' }}>
          <PrettyFormRow label="description">
          <PrettyInput value={this.state.description} onChange={this.onChangeDescriptionInput} />
          </PrettyFormRow>
        </PrettyGutter>
        <Hr />
        <PrettyGutter>
          <PrettyFormRow label="tags">
            { this.renderTags() }
          </PrettyFormRow>
        </PrettyGutter>
        <Hr />
        <PrettyGutter>
          <PrettyFormRow label="time">
            <TrackerButtons onTimeSelected={this.onTimeSelected} />
          </PrettyFormRow>
        </PrettyGutter>
        <PrettyGutter>
          <PrettyFormRow label="log">
            <TimeToTrack>
              { this.timeSelectedToString }
            </TimeToTrack>
          </PrettyFormRow>
        </PrettyGutter>
        <PrettyGutter>
          <PrettyFormRow label="🌈">
            <ButtonSubmit onClick={this.onClickSaveTracker}>Create a new track 👊</ButtonSubmit>
          </PrettyFormRow>
        </PrettyGutter>
      </PageContainer>
    );
  }
}

export default Tracker;
