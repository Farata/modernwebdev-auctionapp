/// <reference path='../refs.ts'/>

module auction.controller {
  'use strict';

  import m = auction.model;
  import s = auction.service;

  export interface IProductScope extends ng.IScope {
    model: ProductController;
  }

  export interface ISearchFormModel {
    minPrice?: number;
    maxPrice?: number;
  }

  export class ProductController {
    private static $inject = [
      '$scope',
      'product'
    ];

    public isSearchFormShown = false;

    constructor(private $scope: IProductScope,
                public product: m.ProductModel) {
      $scope.model = this;
    }

    public static resolve = {
      product: ['$route', 'ProductService',
        ($route, productService: s.IProductService) => {
          var productId = parseInt($route.current.params.id);
          return productService.getById(productId);
        }]
    };
  }

  angular.module('auction').controller('ProductCtrl', ProductController);
}
