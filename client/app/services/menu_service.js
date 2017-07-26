(function () {
    // Attaches MenuService service to the main Angular app module
    angular
        .module("APP_MODULE")
        .service("MenuService", MenuService);

    MenuService.$inject = ['$http'];

    function MenuService($http) {

        var service = this;

        // EXPOSED FUNCTIONS -------------------------------------------------------------------------------------------
        service.func=func();

        // Menu services -------------------------------------------------------------------------
		  function func() {
		     return true;
		  }
    }
})();
