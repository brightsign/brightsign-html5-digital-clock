'use strict';

/* BrightSign AngularJS Module */

var bsApp = angular.module('bsApp', []);


bsApp.config(function($locationProvider){
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});
