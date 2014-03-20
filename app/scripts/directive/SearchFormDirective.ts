/// <reference path='../refs.ts'/>

module auction.directive {
  'use strict';

  function searchFormDirective() {
    return {
      scope: true,
      restrict: 'E',
      templateUrl: 'views/partial/searchForm.html'
    };
  }

  angular.module('auction').directive('auctionSearchForm', searchFormDirective);
}
