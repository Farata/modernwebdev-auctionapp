/// <reference path='refs.ts'/>

module auction {
  'use strict';

  angular.module('auction', ['ngRoute'])
    .config(['$routeProvider', ($routeProvider: ng.route.IRouteProvider) => {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/search', {
          templateUrl: 'views/search.html',
          controller: 'SearchCtrl'
        });
    }]);
}
