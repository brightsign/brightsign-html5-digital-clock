'use strict';

bsApp.directive('analogClock', function ($interval) {
    return {
        restrict: 'E',
        scope: {
            x: '@',
            y: '@',
            r: '@',
            w: '@',
            h: '@',
            showSeconds: '@',
            showClockFace: '@'
        },
        templateUrl: 'analog-clock.html',
        link: function ($scope) {

            $scope.clockWidth = $scope.w;
            $scope.clockHeight = $scope.h;
            $scope.hrY2 = $scope.y - $scope.r * 0.5;
            $scope.minY2 = $scope.y - $scope.r * 0.75;
            $scope.secY2 = $scope.y - $scope.r * 0.9;

            $scope.calculateRotation = function () {
                var now = new Date();
                $scope.hourRotation = 360 * now.getHours() / 12;
                $scope.minuteRotation = 360 * now.getMinutes() / 60;
                $scope.secondRotation = 360 * now.getSeconds() / 60;
            }

            $interval(function () {
                $scope.calculateRotation()
            }, 1000);
            $scope.calculateRotation();
        }
    };
});

bsApp.directive('digitalClock', function ($interval, $filter) {
    return {
        restrict: 'E',
        scope: {
            dateFormat: '@',
            // = because can set font size when doing automatic sizing
            clockStyle: '=',
            timezoneInMinutes: '@',
            caption: '@',
            face: '@'
        },
        templateUrl: 'digital-clock.html',
        link: function ($scope, element, attrs) {

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
        }
    };
});

bsApp.directive('textFill', function () {
    return {
        restrict: 'A',
        priority: -1,
        link: function (scope, element, attrs) {

            // Text-fill attribute turns this behavior on or off
            var fill = scope.$eval(attrs.textFill);
            if (!fill) {
                return;
            }
            var text = '12/27/2000';// element.html();
            var oldFontSize = parseInt(window.getComputedStyle(element[0])["font-size"]);
            var oldHeight = element[0].offsetHeight;
            var myDiv = angular.element("<div/>");
            myDiv.html(text);
            element.append(myDiv);
            var min = 1, max = 200, fontSize;
            do {
                fontSize = (max + min) / 2;
                myDiv.css('fontSize', fontSize);
                var offsetHeight = myDiv[0].offsetHeight;
                var multiplier = oldHeight / offsetHeight;
                if (multiplier == 1) {
                    min = max = fontSize
                }
                if (multiplier > 1) {
                    min = fontSize
                }
                if (multiplier < 1) {
                    max = fontSize
                }
                console.log(fontSize);
            } while ((max - min) > 1);
            fontSize = min;
            element.css('fontSize', fontSize);
            myDiv.remove();
        }
    };
});
