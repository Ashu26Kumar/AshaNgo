import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent } from 'ngx-carousel-lib';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }
  @ViewChild("topCarousel", {static: false}) topCarousel: CarouselComponent;

  ngOnInit() {
  }
  
  next(){
    this.topCarousel.slideNext();
  }
  prev(){
    this.topCarousel.slidePrev();
  }

}
