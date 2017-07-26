(function () {
    // Attaches LoginService service to the main Angular app module
    angular
        .module("APP_MODULE")
        .service("LoginService", LoginService);

    LoginService.$inject = ['$http'];

    function LoginService($http) {

        var service = this;

        // EXPOSED FUNCTIONS -------------------------------------------------------------------------------------------
        service.func=func();

        // Login services -------------------------------------------------------------------------
		  function func() {
		     return true;
		  }
    }
})();
