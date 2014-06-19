'use strict';

bsApp.directive('digitalClock', function ($interval, $filter, $timeout) {
    return {
        restrict: 'E',
        scope: {
            dateFormat: '@',
            // = because can set font size when doing automatic sizing
            clockStyle: '=',
            faceStyle: '=',
            timezoneInMinutes: '@',
            caption: '@',
            face: '@',
            fontSizeAuto: '@'
        },
        templateUrl: 'digital-clock.html',
        link: function ($scope, element) {

            $interval(function () {

                $scope.now = new Date();
                var date = new Date();
                // Convert to supplied timezone
                if ($scope.timezoneInMinutes) {
                    // Subtract the supplied timezone offset
                    $scope.now = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes() - $scope.timezoneInMinutes, date.getUTCSeconds());
                } else {
                    $scope.now = new Date();
                }

            }, 1000);
            $scope.now = new Date();
            $timeout(function () {
                if ($scope.$eval($scope.fontSizeAuto)===true) {
                    $(element).find('.textFill').textfill({ maxFontPixels: 1000 });
                }
            });
        }
    };
});

