(function () {
    angular
        .module("APP_MODULE")
        .controller("UsersListCtrl", UsersListCtrl);

    UsersListCtrl.$inject = ['$filter', '$window', '$state', '$stateParams', "UsersService"];

    function UsersListCtrl($filter, $window, $state, $stateParams, UsersService) {
        var vm = this;

        // Exposed to view: data models ----------------
        vm.clickAdd = clickAdd;
        vm.clickCancel = clickCancel;
        vm.clickBack = clickBack;

        vm.userslist = [];
        vm.xxx="";
    

        stash.IndexCtrl_vm.crumb = "Users List";

        p = UsersService.retrieveUsers("first_name","");
        p.then(function (result) {
            vm.userslist=result.data.users;
            console.log(vm.userslist[1]);
            for (u=0;u<vm.userslist.length;u++) {
                temp="";
                if (vm.userslist[u].pictureBlob && vm.userslist[u].pictureBlob.data) {
                    for (i=0;i<vm.userslist[u].pictureBlob.data.length;i++) {
                        temp=temp+String.fromCharCode(vm.userslist[u].pictureBlob.data[i]);
                    }
                }
                vm.userslist[u].pictureBlob=temp;
            }
        }, function (err) {
            console.log("err=", err);
        });

        function clickBack() {
            stash.IndexCtrl_vm.crumb = "Menu";
            $state.go("MenuState", { reload: true });
        }

        function clickAdd() {
            stash.IndexCtrl_vm.crumb = "Users";
            $state.go("UsersState", { reload: true });
        }

        function my_hash(pwd) {
            return pwd;
        }

        function clickCancel() {
            // window.alert("cancel");
            console.log("Users controller, cancel clicked, sending to MenuState");
            $state.go("MenuState", { reload: true });
        }
    }
})();
