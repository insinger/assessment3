(function () {
  angular
    .module('APP_MODULE')
    .service('PassportSvc', PassportSvc);

  PassportSvc.$inject = ["$http"];

  function PassportSvc($http) {
    var svc = this;

    svc.login = login;
    svc.logout = logout;
    svc.userAuth = userAuth;

    function userAuth() {
      return $http.get(
        '/user/auth'
      );
    }

    function login(user) {
      return $http.post(
        '/login',
        user
      );
    }

    function logout(user) {
      return $http.get(
        '/logout'
      );
    }

  }
})();
