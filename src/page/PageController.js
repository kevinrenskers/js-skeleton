module.exports = function PageController($location) {
  'ngInject';

  this.click = () => {
    console.log($location.path());
  };
};
