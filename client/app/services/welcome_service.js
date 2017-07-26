(function () {
    // Attaches WelcomeService service to the main Angular app module
    angular
        .module("APP_MODULE")
        .service("WelcomeService", WelcomeService);

    WelcomeService.$inject = ['$http'];

    function WelcomeService($http) {

        var service = this;

        // EXPOSED FUNCTIONS -------------------------------------------------------------------------------------------
        service.isLoggedIn=isLoggedIn;

        // Welcome services -------------------------------------------------------------------------

		  // Check if the current user is logged in
        // function isLoggedIn() {
        //     $http.get('api/isloggedin')
			// 	.then(function (resp) {
			// 			console.log("success",resp.status,resp.data);
			// 			return true; // Authenticated
			// 			}
			// 	)
			// 	.catch(function (err) {
			// 		console.log("error",err.status,err.data);
			// 		return false;
			// 		}
			// 	);
        // }
        function isLoggedIn() {
            return $http.get('api/isloggedin');
        }
    }
})();
