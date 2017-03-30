// Promise polyfill for IE11
import { bootstrap } from 'aurelia-bootstrapper-webpack';

var Promise = require('bluebird'); // eslint-disable-line

bootstrap(function(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-dialog');

  aurelia.start().then(() => aurelia.setRoot('app', document.querySelector('#root')));
});
