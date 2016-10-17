(function () {
    var app = angular.module('servicesModule', []);
    app.factory('dataService', ['$document', '$http', function ($document, $http) {
        const API_URL = "http://localhost:3000/";



        const STORAGE_KEY = "people";
        return {
            getUsers: function () {
                return $http.get(API_URL + "users").then(function (response) {
                    return response.data;
                });
            },
            addUser: function (person) {
                return $http.post(API_URL + "users", person).then(function (response) {
                    return response.data;


                });
            },
            deleteUser: function (id) {
                return $http.delete(API_URL+'users' +'/' + id).then(function (response) {
                    return response.data;
                })
            },
            editUser: function (user) {
                return $http.post(API_URL + "users", user).then(function (response) {
                    return response.data;

                });
            }

        }
    }]);

})();