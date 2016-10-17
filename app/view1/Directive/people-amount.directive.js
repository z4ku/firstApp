(function () {
    var app = angular.module('amountModule', []);
    app.directive('peopleAmount', [function () {
        return {
            templateUrl: 'view1/Table-amount/table-amount.html',
            scope: {
                people: '=',
            },
            link: function (scope, element, attr) {
                scope.totalAmount = function () {
                    return scope.people ? scope.people.length : 0;
                };

                scope.maleAmount = function () {
                    var filtered = _.filter(scope.people, function (person) {
                        return person.gender == "male";
                    })
                    return filtered.length;
                };

                scope.femaleAmount = function () {
                    var filtered = _.filter(scope.people, function (person) {
                        return person.gender == "female";
                    })
                    return filtered.length;


                };
            },

        };

    }
    ]);
})();