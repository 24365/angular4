import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private products:Product[] = [
    new Product(1,"Angular",1.99,3.5,"关于Angular的学习和实战",["电子","硬件"],"//placehold.it/320x150"),
    new Product(2,"特仑苏牛奶",99,4,"不是每一种牛奶都叫特仑苏",["饮料"],"//placehold.it/320x150"),
    new Product(3,"西西西装",19,3,"西西西装，你值得拥有",["服装","衣服"],"//placehold.it/320x150"),
    new Product(4,"改革开放三十年",6.99,2,"改革开放，深圳的三十年",["人物","新闻"],"//placehold.it/320x150"),
    new Product(5,"人工智能",39,1.5,"人工智能代表未来科技生活",["图书","科技"],"//placehold.it/320x150"),
    new Product(6,"手机App",3.4,2.5,"App在手，一切皆有可能",["硬件","物联网"],"//placehold.it/320x150")
  ];
  private comments:Comment[]=[
    new Comment(1,1,'2017-02-22 22:02:00','张三',3,'东西不错'),
    new Comment(2,1,'2017-03-12 22:07:00','王五',3.5,'东西不错'),
    new Comment(3,1,'2017-03-08 12:10:00','赵六',4,'东西不错'),
    new Comment(4,2,'2017-04-02 8:30:00','李四',2,'东西还行')
  ];
  constructor() { }
  getProducts():Product[]{
    return this.products;
  }
  getProduct(id:number):Product{
    return this.products.find((product)=>product.id==id);
  }
  getCommentsForProductId(id:number):Comment[]{
    return this.comments.filter((comment:Comment)=>comment.productId==id)
  }
}
export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>,
    public imgUrl:string
  ){

  }
}
export class Comment {
  constructor(
    public id:number,
    public productId:number,
    public timestamp:string,
    public user:string,
    public rating:number,
    public content:string
  ){}
}
