'use strict';

angular.module('cdu2015App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/ciberary', {
        templateUrl: 'app/ciberary/ciberary.html',
        controller: 'CiberaryCtrl'
      });
  });
