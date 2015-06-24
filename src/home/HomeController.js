module.exports = class HomeController {
  // @ngInject
  constructor(Restangular) {
    this.Restangular = Restangular;
  };

  click() {
    this.Restangular.all('/users/kevinrenskers/repos').getList().then((data) => {
      console.log(data.map(x => x.name));
    });
  };
};
