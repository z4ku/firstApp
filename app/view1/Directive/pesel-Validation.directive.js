"use strict";
(function () {
    'use strict';
    var app = angular.module('validModule', []);

    app.directive('peselValidation', ['$document', function ($document) {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$validators.pesValid = function (modelValue, pesel) {
                    if (ctrl.$isEmpty(modelValue)) {

                        return true;
                    }

                    var reg = /^[0-9]{11}$/;
                    if (reg.test(pesel) == false) {
                        return false;
                    }
                    else {
                        var dig = ("" + pesel).split("");
                        var kontrola = (1 * parseInt(dig[0]) + 3 * parseInt(dig[1]) + 7 * parseInt(dig[2]) + 9 * parseInt(dig[3]) + 1 * parseInt(dig[4]) + 3 * parseInt(dig[5]) + 7 * parseInt(dig[6]) + 9 * parseInt(dig[7]) + 1 * parseInt(dig[8]) + 3 * parseInt(dig[9])) % 10;
                        if (kontrola == 0) kontrola = 10;
                        kontrola = 10 - kontrola;
                        if (parseInt(dig[10]) == kontrola)
                            return true;
                        else
                            return false;
                    }


                };
            }
        };

    }
    ]);
})();

