(function () {
	angular
		.module("APP_MODULE")
		.controller("MenuCtrl", MenuCtrl);

	MenuCtrl.$inject = ['$filter', '$window', '$state', '$stateParams', 'MenuService', 'WelcomeService'];

	function MenuCtrl($filter, $window, $state, $stateParams, MenuService, WelcomeService) {
		var vm = this;

		// Exposed to view: data models ----------------
		vm.projectCount = 5;
		vm.clickProjects = clickProjects;
		vm.clickStudents = clickStudents;

		// canIStay(); // or bounce back to welcome state

		stash.IndexCtrl_vm.crumb = "Menu";

		var clicky_string = "hello";

		function clickProjects() {
			vm.projectCount += 1;
			clicky_string += (" " + vm.projectCount);
			stash.IndexCtrl_vm.crumb = clicky_string;
		}
		function clickStudents() {
			stash.IndexCtrl_vm.crumb = "Users";
			$state.go("UsersListState", { reload: true });
		}

		function canIStay() {
			var p = WelcomeService.isLoggedIn();
			p.then(function (result) {
				console.log("Menu Controller - User is logged in");
			}, function (err) {
				console.log("Menu Controller - User isn't logged in, must return to welcome state");
				$state.go("WelcomeState", { reload: true });
			}
			);
		}

	}
})();
