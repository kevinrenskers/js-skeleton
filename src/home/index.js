require('./home.less');

module.exports = (appModule) => {
  appModule.config(($stateProvider) => {
    $stateProvider.state('home', {
      url: '/',
      template: require('./home.html'),
      controllerAs: 'vm',
      controller: (Restangular) => {
        console.log(Restangular);
      }
    });
  });
};
