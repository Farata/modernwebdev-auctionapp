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
        })
        .when('/product/:id', {
          templateUrl: 'views/product.html',
          controller: 'ProductCtrl',
          resolve: auction.controller.ProductController.resolve
        });
    }]);
}
