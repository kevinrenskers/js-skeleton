const angular = require('angular');
global._ = require('underscore');

require('angular-ui-router');
require('restangular');
require('checklist-model');
require('./assets/style.less');

// Create the main app module
const module = angular.module('app', [
  'ui.router',
  'restangular',
  'checklist-model'
]);

module.config(($urlRouterProvider, $locationProvider, RestangularProvider) => {
  $urlRouterProvider.when('', '/');

  // Enabled html5 mode, doesn't use the # part in the urls
  $locationProvider.html5Mode(true);

  RestangularProvider.setBaseUrl('https://api.github.com');
});

require('./home')(module);
require('./page')(module);
