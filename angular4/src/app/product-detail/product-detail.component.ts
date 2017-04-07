import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";
import {Product, ProductService,Comment} from "../shared/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:Product;
  comments:Component[];
  newRating:number=5;
  newComment:string="";
  isCommentHidden:boolean=true;

  constructor(
    private routeInfo:ActivatedRoute,
    private productService:ProductService
  ) { }

  ngOnInit() {
    let productId:number = this.routeInfo.snapshot.params["productId"];
    this.product =this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId);
  }
  addComment(){
    let comment = new Comment(0,this.product.id,new Date().toLocaleString(),"someone",this.newRating,this.newComment);
    this.comments.unshift(comment);
    let sum = this.comments.reduce((sum, comment) => sum + (comment as any).rating, 0);
    this.product.rating=Math.floor(((sum as number) / this.comments.length)*100)/100;
    this.newComment=null;
    this.newRating=5;
    this.isCommentHidden=true;
  }
}












