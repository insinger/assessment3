(function () {
    angular
        .module("APP_MODULE")
        .controller("LoginCtrl", LoginCtrl);

    LoginCtrl.$inject = ['$filter', '$window', '$state', '$stateParams', "LoginService", "PassportSvc"];

    function LoginCtrl($filter, $window, $state, $stateParams, LoginService, PassportSvc) {
        var vm = this;

        // Exposed to view: data models ----------------
        vm.clickLogin = clickLogin;
        vm.clickCancel = clickCancel;
        vm.user = {
            email: '',
            password: '',
        }
        vm.msg = '';


        stash.IndexCtrl_vm.crumb = "Log In";

        function clickLogin() {
            console.log("clickLogin()");
            PassportSvc.login(vm.user)
                .then(function (result) {
                    $state.go('MenuState');
                    return true;
                })
                .catch(function (err) {
                    vm.msg = 'Invalid Username or Password!';
                    vm.user.username = vm.user.password = '';
                    return false;
                });
        }

        function clickCancel() {
            console.log("Login controller, cancel clicked, sending to Welcome state");
            $state.go("WelcomeState", { reload: true });
        }
    }
})();
