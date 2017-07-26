(function () {
    // Attaches UsersService service to the main Angular app module
    angular
        .module("APP_MODULE")
        .service("UsersService", UsersService);

    UsersService.$inject = ['$http'];

    function UsersService($http) {

        var service = this;

        // EXPOSED FUNCTIONS -------------------------------------------------------------------------------------------
        service.createUser=createUser;
        service.retrieveUserByID=retrieveUserByID;
        service.retrieveUsers=retrieveUsers;
        service.updateUser=updateUser;
        service.deleteUser=deleteUser;

        // EXPOSED MODELS ------------------------------------------------------------------------

        // User services -------------------------------------------------------------------------

        function createUser(User) {
            return $http({
                method: 'POST',
                url: 'api/users',
                data: {User: User}
            });
        }

        function retrieveUserByID(id) {
            return $http({
                method: 'GET',
                url: 'api/users/'+id,
            });
        }

        function retrieveUsers(searchField,term,direction) {
				var searchString="";
				var params={};
				var dir='a';
				if (direction) dir=direction;
				if (searchField=="firstName" || searchField=="lastName" || searchField=="expertise") {
					params[searchField]=term;
					params["orderfield"]=searchField;
					params["orderdirection"]=dir;
				} else {
					params["firstName"]=term;
					params["lastName"]=term;
					params["expertise"]=term;
					params["orderfield"]="lastName";
					params["orderdirection"]=dir;
				}
            return $http({
                method: 'GET',
                url: 'api/users/',
                params: params
            });
        }

        function updateUser(id,User) {
            return $http({
                method: 'PUT',
                url: 'api/users/' + id,
                data: {
                    User: User
                }
            });
        }

        function deleteUser(id) {
            return $http({
                method: 'DELETE',
                url: 'api/users/' + id,
            });
        }

    }
})();
