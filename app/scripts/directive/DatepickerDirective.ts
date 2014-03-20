/// <reference path='../refs.ts'/>

module auction.directive {
  'use strict';

  function datepickerDirective() {
    return {
      restrict: 'A',
      link: function (scope, el) {
        el.datepicker();
      }
    };
  }

  angular.module('auction').directive('auctionDatepicker', datepickerDirective);
}
