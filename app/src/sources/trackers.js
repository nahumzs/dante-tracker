import firebase from '../firebase';
import moment from 'moment';

import { __USER__UUID__ } from '../.firebase.user'; // config
import { trackersPath } from '../.firebase.paths'
import response, { __SUCCESS__, __ERROR__ } from './_response';

export default class TrakersSources {
  static save = (tracker) => new Promise((resolve) => {
    const tagsToSave = {
      utcOffset: new Date().getTimezoneOffset(),
      saveOn: moment().utc(),
      ...tracker,
    };
    const path = trackersPath(__USER__UUID__);
    const trackerRef = firebase.database().ref(path);
    const newTrackerRef = trackerRef.push();

    newTrackerRef.set(tracker, (error) => {
      if (error) {
        resolve(response(null, __ERROR__, `Track could not be saved`));
      }
      resolve(response(null, __SUCCESS__, `Track saved successfully`));
    });
  });
}
