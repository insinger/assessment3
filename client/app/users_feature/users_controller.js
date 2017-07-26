(function () {
    angular
        .module("APP_MODULE")
        .controller("UsersCtrl", UsersCtrl);

    UsersCtrl.$inject = ["$scope", '$filter', '$window', '$state', '$stateParams', "UsersService", "Upload"];

    function UsersCtrl($scope, $filter, $window, $state, $stateParams, UsersService, Upload) {
        var vm = this;

        // Exposed to view: data models ----------------
        vm.clickCreate = clickCreate;
        vm.clickCancel = clickCancel;
        vm.clickUploadPicture = clickUploadPicture;
        vm.readFile = readFile;
        vm.cancelImageSelection = cancelImageSelection;
        vm.resultDisplay = resultDisplay;
        vm.roleslist = ["Student", "Training Coordinator"];
        vm.vanilla = 1;
        vm.expand = false;
        vm.selectedFile = "";

        vm.firstName = "";
        vm.lastName = "";
        vm.role = 0;
        vm.email = "";
        vm.mobile = "";
        vm.jobTitle = "";
        vm.department = "";
        vm.expertise = "";
        vm.password = "";
        vm.image = "";

        stash.IndexCtrl_vm.crumb = "Users";

        function clickCreate() {
            console.log("clickCreate()");
            // construct payload
            var payload = {};
            payload.userId = null; // autoincrementing
            payload.firstName = vm.firstName;
            payload.lastName = vm.lastName;
            if (vm.role == 0) { //student
                payload.isTc = 0;
            } else { // training coordinator
                payload.isTc = 1;
            }
            payload.isCc = 0;
            payload.isS = 1;
            payload.isB = 0;
            payload.isAdmin = 0;
            payload.email = vm.email;
            payload.mobile = vm.mobile;
            payload.jobTitle = vm.jobTitle;
            payload.department = vm.department;
            payload.billingId = 1;
            payload.picturePath = "";
            payload.pictureBlob = vm.image;
            payload.expertise = vm.expertise;
            payload.isActive = 1;
            payload.passwordHash = my_hash(vm.password);

            // send to service
            p = UsersService.createUser(payload);
            p.then(function (results) {
                window.alert("Success creating user");
                console.log("Users controller, cancel clicked, sending to UsersListState");
                $state.go("UsersListState", { reload: true });

            }, function (err) {
                window.alert("Error creating user");
            });
        }

        function my_hash(pwd) {
            return pwd;
        }

        function clickCancel() {
            // window.alert("cancel");
            console.log("Users controller, cancel clicked, sending to UsersListState");
            $state.go("UsersListState", { reload: true });
        }
        function clickUploadPicture() {
            console.log("Users controller, clickUploadPicture(), opening popup");
            vm.expand = !vm.expand;
            startcroppie();
        }
        function startcroppie() {
            var el = document.getElementById('croppy-image');
            vm.vanilla = new Croppie(el, {
                viewport: { width: 100, height: 100 },
                boundary: { width: 300, height: 300 },
                showZoomer: true,
                enableOrientation: true
            });
            vm.vanilla.bind({ url: vm.image });
        }

        function cancelImageSelection() {
            console.log("cancelImageSelection()");
            vm.expand = false;
            vm.vanilla.destroy();
        }

        function resultDisplay() {
            vm.vanilla.result({
                type: 'canvas',
                size: 'viewport'
            }).then(function (resp) {
                // console.log(resp);
                vm.image = resp;
                vm.expand = false;
                console.log("resultDisplay()");
                $scope.$apply();
                vm.vanilla.destroy();
                console.log("croppie destroyed");
            }).catch(function (err) {
                console.log("err", err);
            });
        }

        function readFile(input) {
            console.log("readfile input=", input);
            if (input) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    vm.vanilla.bind({
                        url: e.target.result
                    }).then(function () {
                        console.log('jQuery bind complete');
                    });
                }
                reader.readAsDataURL(input);
            }
        }
    }
})();
