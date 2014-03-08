/// <reference path='../refs.ts'/>

module auction.directive {
  'use strict';

  function auctionFooterDirective() {
    return {
      scope: true,
      restrict: 'E',
      templateUrl: 'views/partial/footer.html'
    };
  }

  angular.module('auction').directive('auctionFooter', auctionFooterDirective);
}
