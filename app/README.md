# How to run it in your browser
- `cd app`
- `yarn install`
- created `${your-path}/app/src/.firebase.dev.json` && `${your-path}/app/src/.firebase.production.json`
- inside those copy/paste the database config of your firebase db. it should look like something like this:
```js
// .firebase.dev.json and .firebase.production.json
{
  "apiKey": "${random-number}",
  "authDomain": "${your-firebase-database}.firebaseapp.com",
  "databaseURL": "https://${your-firebase-database}.firebaseio.com",
  "projectId": "${project-id}",
  "storageBucket": "${project-id}.appspot.com",
  "messagingSenderId": "${some-random-number}"  
}
```
- > `yarn start`
- ^ should open your browser and you should see the app running

# How to test it in the browser
- inside of app folder
- `yarn build`
- in your chrome browser type `chrome://extensions`
- enable the checkbox in the top right corner for `Developer mode`
- Load unpacked extension
- browse and search for the folder chrome inside of the clone repository
- ✨ the chrome extension should be ready to be consume
