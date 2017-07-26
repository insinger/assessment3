(function () {
    angular
        .module("APP_MODULE")
        .controller("YyyCtrl", YyyCtrl);

    // YyyCtrl.$inject = ['$filter', '$window', 'YyyService','$state','$stateParams'];
    YyyCtrl.$inject = ['$filter', '$window','$state','$stateParams' ];

    function YyyCtrl($filter, $window, $state, $stateParams) {
        var vm = this;

        // Exposed to view: data models ----------------
        vm.varname=1;
        vm.funcname=func;

		  stash.IndexCtrl_vm.crumb="yyy";

		  function func() {
		  }
	}
})();
