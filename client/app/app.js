// Create the main application module
(function () {
    angular
        .module("APP_MODULE", [
            "ngMessages",   // ngMessages simple show/hide form error messages, work with ngModel $error object
            "ngAnimate",    // ngAnimate module supports both CSS-based and JS-based animations via callback hooks
            "ui.router",     // Client-side #-based routing
            "ngFileUpload",  // Angular file upload directive
        ]);

    angular.module("APP_MODULE").config(myRoutesConfig);

    myRoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

    // Define UI states

    // function myRoutesConfig($stateProvider, $urlRouterProvider) {
    //     $stateProvider.state('WelcomeState', { url: "/WelcomeUrl", templateUrl: "/app/welcome_feature/welcome_view.html", controller: 'WelcomeCtrl as ctrl' });
    //     $stateProvider.state('MenuState', { url: "/MenuUrl", templateUrl: "/app/menu_feature/menu_view.html", controller: 'MenuCtrl as ctrl' });
    //     $stateProvider.state('UsersState', { url: "/UsersUrl", templateUrl: "/app/users_feature/users_view.html", controller: 'UsersCtrl as ctrl' });
    //     $stateProvider.state('UsersListState', { url: "/UsersListUrl", templateUrl: "/app/userslist_feature/userslist_view.html", controller: 'UsersListCtrl as ctrl' });
    //     $stateProvider.state('LoginState', { url: "/LoginUrl", templateUrl: "/app/login_feature/login_view.html", controller: 'LoginCtrl as ctrl' });
    //     $stateProvider.state('XxxState', { url: "/XxxUrl", templateUrl: "/app/xxx_feature/xxx_view.html", controller: 'XxxCtrl as ctrl' });
    //     $stateProvider.state('YyyState', { url: "/YyyUrl", templateUrl: "/app/yyy_feature/yyy_view.html", controller: 'YyyCtrl as ctrl' });
    //     $urlRouterProvider.otherwise("/WelcomeUrl"); // also sets initial state if not provided
    // }


    function myRoutesConfig($stateProvider, $urlRouterProvider) {
        $stateProvider.state('WelcomeState',
            {
                url: "/WelcomeUrl",
                templateUrl: "/app/welcome_feature/welcome_view.html",
                controller: 'WelcomeCtrl as ctrl',
                resolve: {
                    user: function (PassportSvc) {
                        return PassportSvc.userAuth()
                            .then(function (result) {
                                return result.data.user;
                            })
                            .catch(function (err) {
                                return '';
                            });
                    }
                },
            });
        $stateProvider.state('MenuState', {
            url: "/MenuUrl",
            templateUrl: "/app/menu_feature/menu_view.html",
            controller: 'MenuCtrl as ctrl'
        });
        $stateProvider.state('UsersState', {
            url: "/UsersUrl",
            templateUrl: "/app/users_feature/users_view.html",
            controller: 'UsersCtrl as ctrl'
        });
        $stateProvider.state('UsersListState', {
            url: "/UsersListUrl",
            templateUrl: "/app/userslist_feature/userslist_view.html",
            controller: 'UsersListCtrl as ctrl'
        });
        $stateProvider.state('LoginState', {
            url: "/LoginUrl",
            templateUrl: "/app/login_feature/login_view.html",
            controller: 'LoginCtrl as ctrl',
            resolve: {
                user: function (PassportSvc) {
                    return PassportSvc.userAuth()
                        .then(function (result) {
                            return result.data.user;
                        })
                        .catch(function (err) {
                            return '';
                        });
                }
            },
        });
        $stateProvider.state('XxxState', {
            url: "/XxxUrl",
            templateUrl: "/app/xxx_feature/xxx_view.html",
            controller: 'XxxCtrl as ctrl'
        });
        $stateProvider.state('YyyState', {
            url: "/YyyUrl",
            templateUrl: "/app/yyy_feature/yyy_view.html",
            controller: 'YyyCtrl as ctrl'
        });

        $urlRouterProvider.otherwise("/WelcomeUrl"); // also sets initial state if not provided
    }

})();

