// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Amplify, { Auth, Logger } from 'aws-amplify';

import Vue from 'vue';
import App from './App';

import awsExports from './aws-exports';

Amplify.configure(awsExports);
Amplify.Logger.LOG_LEVEL = 'DEBUG';

const logger = new Logger('main');

Vue.config.productionTip = false;

Auth.currentUserInfo()
  .then(user => logger.debug(user))
  .catch(err => logger.debug(err));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
