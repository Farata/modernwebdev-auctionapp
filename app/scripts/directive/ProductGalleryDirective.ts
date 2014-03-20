/// <reference path='../refs.ts'/>

module auction.directive {
  'use strict';

  function productGalleryDirective() {
    return {
      restrict: 'E',
      templateUrl: 'views/partial/productGallery.html'
    };
  }

  angular.module('auction').directive('auctionProductGallery', productGalleryDirective);
}
