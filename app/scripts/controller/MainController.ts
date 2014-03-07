/// <reference path='../refs.ts'/>

module auction.controller {
  'use strict';

  import m = auction.model;
  import s = auction.service;

  export interface IMainScope extends ng.IScope {
    model: MainController;
  }

  export class MainController {
    private static $inject = ['$scope', 'ProductService'];

    public featuredProducts: m.ProductModel[];

    constructor(private $scope: IMainScope,
                private productService: s.IProductService) {
      this.$scope.model = this;
      this.productService.getFeatured()
        .then((products) => this.featuredProducts = products);
    }
  }

  angular.module('auction').controller('MainCtrl', MainController);
}
