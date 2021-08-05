import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { Flower } from '../models/flower';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {

  @Input('myFlower')flower:Flower;
  @Output()buyClick=new EventEmitter<number>();
  //flower:Flower
  // className:string
  constructor() { 
    // this.flower = new  Flower();
    // this.flower.id = 101;
    // this.flower.name = "Daisy";
    // this.flower.pic = "./assets/pictures/Pic1.jpg";
    // this.className = "btn btn-success";
  }
  // checkWork(){
  //   this.className = "btn btn-danger";
  // }
  buy(){
   // this.buyClick.emit(this.flower.price);
   console.log(this.flower);
   this.buyClick.emit(this.flower.id);
  }
  ngOnInit(): void {
  }

}
