'use strict';


var app = angular.module('myApp.view1', ['ngRoute', 'amountModule', 'servicesModule', 'filterModule', 'validModule',])


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'first1Ctrl'
    });
}])


app.controller('first1Ctrl', ['$scope', '$filter', 'dataService', '$q', 'orderByFilter', function ($scope, $filter, myServices, $q, orderBy) {

    function refreshUsers() {
        myServices.getUsers().then(function (users) {

            $scope.list = users;
        });
    }

    refreshUsers();


    $scope.isaAll = false;
    $scope.selectAllRows = function () {
        if ($scope.isaAll === false) {
            _.each($scope.list, function (row, index) {
                $scope.checkboxesModel[index] = true;

            });
            $scope.isaAll = true;


        } else {
            _.each($scope.list, function (row, index) {
                $scope.checkboxesModel[index] = false;

            });
            $scope.isaAll = false;
        }

    }
    $scope.checkboxesModel = {};


    $scope.save = function (person) {
        myServices.addUser(person).then(refreshUsers);
        $scope.newItem = '';

    }

    $scope.remove = function (id) {
        var indexes = [];
        _.each($scope.checkboxesModel, function (checked,id) {
            if (checked) {
                indexes.push(id);
            }
        })


        var promises = [];
        var deferred = $q.defer();


        _.each(indexes, function (id) {
            promises.push(myServices.deleteUser(id));


            $q.all(promises).then(refreshUsers)

        });

    }

    $scope.editUser = function (user) {
        myServices.editUser(user).then(refreshUsers);


        $scope.newItem = user;


    }
    $scope.cancel = function (user) {
        $scope.newItem = '';

    }

    $scope.submitForm = function () {
        if ($scope.myForm.$valid) {
        }
    };

    $scope.sortColumn = "name";
    $scope.reverseSort = false;

    $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.sortColumn == column) ?
            !$scope.reverseSort : false;
        $scope.sortColumn = column;
    }

    $scope.getSortClass = function (column) {

        if ($scope.sortColumn == column) {
            return $scope.reverseSort
                ? 'arrow-down'
                : 'arrow-up';
        }

        return '';
    }


    $scope.check_gender = ['male'];
    $scope.addGender = function (item) {
        if ($scope.checked_gender.indexOf(item) != -1) return;
        $scope.check_gender.push(item);
    }

}
]);