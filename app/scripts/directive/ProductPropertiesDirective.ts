/// <reference path='../refs.ts'/>

module auction.directive {
  'use strict';

  function productPropertiesDirective() {
    return {
      restrict: 'E',
      templateUrl: 'views/partial/productProperties.html'
    };
  }

  angular.module('auction').directive('auctionProductProperties', productPropertiesDirective);
}
