/// <reference path='../refs.ts'/>

module auction.directive {
  'use strict';

  function auctionNavbarDirective() {
    return {
      scope: true,
      restrict: 'E',
      templateUrl: 'views/partial/navbar.html'
    };
  }

  angular.module('auction').directive('auctionNavbar', auctionNavbarDirective);
}
