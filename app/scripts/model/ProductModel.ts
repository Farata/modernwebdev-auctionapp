/// <reference path='../refs.ts'/>

module auction.model {
  // Notice how we use `export` here. Since model is used directly and not
  // registered into Angular's DI container, it should be available outside the
  // `auction.model` module.
  export class ProductModel {
    description: string;
    price      : number;
    thumb      : string;
    timeleft   : number;
    title      : string;
    url        : string;
    watchers   : number;
  }
}
