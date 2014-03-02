/// <reference path='../refs.ts'/>

module auction.controllers {
  'use strict';

  export class MainController {
      static $inject = ['$scope'];

      constructor($scope) {
        $scope.awesomeThings = [
          'HTML5 Boilerplate',
          'AngularJS',
          'Karma'
        ];
      }
  }

  angular.module('auction').controller('MainCtrl', MainController);
}
