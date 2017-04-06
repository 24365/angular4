import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  private ImgUrls:Array<ImgUrl>;
  constructor() { }

  ngOnInit() {
    this.ImgUrls = [
      new ImgUrl("//placehold.it/800x300","第一个轮播图",true),
      new ImgUrl("//placehold.it/800x300","第二个轮播图",false),
      new ImgUrl("//placehold.it/800x300","第三个轮播图",false),
    ]
  }
}
export class ImgUrl {
  constructor(
    public ImgUrl:string,
    public altTitle:string,
    public ImgAction:boolean
  ){}
}
