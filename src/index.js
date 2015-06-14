const angular = require('angular');
require('angular-ui-router');
require('./assets/style.less');

// Create the main app module
const module = angular.module('app', [
  'ui.router'
]);

module.config(($urlRouterProvider, $locationProvider) => {
  $urlRouterProvider.when('', '/');

  // Enabled html5 mode, doesn't use the # part in the urls
  $locationProvider.html5Mode(true);
});

require('./home')(module);
require('./page')(module);
