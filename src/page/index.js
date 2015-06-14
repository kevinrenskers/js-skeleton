require('./page.less');

module.exports = (appModule) => {
  appModule.config($stateProvider => {
    $stateProvider.state('page', {
      url: '/page',
      template: require('./page.html')
    });
  });
};
