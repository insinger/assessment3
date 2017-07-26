(function () {
    angular
        .module("APP_MODULE")
        .controller("XxxCtrl", XxxCtrl);

    // XxxCtrl.$inject = ['$filter', '$window', 'XxxService','$state','$stateParams'];
    XxxCtrl.$inject = ['$filter', '$window','$state','$stateParams' ];

    function XxxCtrl($filter, $window, $state, $stateParams) {
        var vm = this;

        // Exposed to view: data models ----------------
        vm.varname=1;
        vm.funcname=func;

		  stash.IndexCtrl_vm.crumb="xxx";

		  function func() {
		  }
	}
})();
