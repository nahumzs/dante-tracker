import firebase from '../firebase';
import moment from 'moment';

import { __USER__UUID__ } from '../.firebase.user'; // config
import { tagsPath } from '../.firebase.paths'
import response, { __SUCCESS__, __ERROR__, __INFO__ } from './_response';

export default class TagsSources {
  static getRef = (id = '') => {
    const path = tagsPath(__USER__UUID__, id);
    const tagsRef = firebase.database().ref(path);
    return tagsRef;
  }

  static onChildAdded = (callback) => {
    const ref = TagsSources.getRef();
    ref.limitToLast(1).on('child_added', snapshot => {
      callback(snapshot);
    });
  }

  static onChildRemoved = (callback) => {
    const ref = TagsSources.getRef();
    ref.on('child_removed', snapshot => {
      callback(snapshot.val());
    });
  }

  static getAll = () => new Promise((resolve) => {
    const path = tagsPath(__USER__UUID__);
    const tagsRef = firebase.database().ref(path);
    tagsRef.orderByKey().on('value', snapshot => {
      resolve(response(snapshot.val()));
    });
  });

  static find = (tag) => new Promise((resolve) => {
    // tag can't be empty
    if (tag.trim().length < 3) {
      // resolve as already existed
      resolve(response(true, __ERROR__, `Tag cannot be empty or less than 3 characters`));
    }

    const path = tagsPath(__USER__UUID__);
    const tagsRef = firebase.database().ref(path);
    tagsRef.orderByChild("label").equalTo(tag).on('value', snapshot => {
      const snap = snapshot.val()
      // tag already exist
      if(snap) {
        const tag = snap[Object.keys(snap)[0]].label;
        resolve(response(true, __ERROR__, `${tag} tag already exist`));
        tagsRef.off('value');
      }

      resolve(response(false));
      tagsRef.off('value');
    });
  });

  static delete = (id) => new Promise((resolve) => {
    const refCollection = TagsSources.getRef();
    const refChild = TagsSources.getRef(id);
    refChild.remove();
  });

  static save = (tagsObject) => new Promise((resolve, reject) => {
    const tagsToSave = {
      utcOffset: new Date().getTimezoneOffset() / 60,
      saveOn: moment().utc().format(),
      ...tagsObject,
    };

    const path = tagsPath(__USER__UUID__);
    const tagsRef = firebase.database().ref(path);
    const newTagRef = tagsRef.push();


    newTagRef.set(tagsToSave, (error) => {
      if (error) {
        resolve(response(null, __ERROR__, `${tagsToSave.label} tag can't be saved`));
      }
      resolve(response(true));
    });
  });
}
