(function () {
	angular
		.module("APP_MODULE")
		.controller("WelcomeCtrl", WelcomeCtrl);

	// WelcomeCtrl.$inject = ['$filter', '$window', 'WelcomeService','$state','$stateParams'];
	WelcomeCtrl.$inject = ['$filter', '$window', '$state', '$stateParams', 'WelcomeService', 'user'];

	function WelcomeCtrl($filter, $window, $state, $stateParams, WelcomeService, user) {
		var vm = this;

		// Exposed to view: data models ----------------
		vm.varname = 1;
		// vm.test = test;
		vm.proceedClicked = proceedClicked;

		stash.IndexCtrl_vm.crumb = "Welcome";

		vm.user = user; // make logged-in state available to the view

		function proceedClicked() {
			$state.go("MenuState", { reload: true });
		}

		//
		// Call function to check if user is already logged in
		// Use the result to immediately switch to the main menu
		//

		// function test() {
		// 	var p = WelcomeService.isLoggedIn();
		// 	p.then(function (result) {
		// 		console.log(result.data.message);
		// 		$state.go("MenuState", { reload: true });
		// 	}, function (err) {
		// 		window.alert("NOPE " + JSON.stringify(err.data));
		// 		console.log(err.data.message);
		// 	}
		// 	);
		// }
	}
})();
