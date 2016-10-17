"use strict";

(function () {
    var app = angular.module('filterModule', []);
    app.filter('genderToImg', ['$document', function ($document) {
        return function (gender) {
            return gender == "male"?"view1/img/male.jpg":"view1/img/female.jpg";
        }


    }]);
})();