import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }
  slides: string [] = ['https://rawgit.com/creativetimofficial/material-kit/master/assets/img/bg.jpg','https://rawgit.com/creativetimofficial/material-kit/master/assets/img/bg2.jpg', 
  'https://rawgit.com/creativetimofficial/material-kit/master/assets/img/bg3.jpg' ]
  i=0;
  

  getSlide() {
      return this.slides[this.i];
  }

  getPrev() {
      this.i = this.i===0 ? 0 : this.i - 1;
  }
    
  getNext() {
      this.i = this.i===this.slides.length? this.i : this.i + 1 ;
  }

  ngOnInit() {
  }

}
