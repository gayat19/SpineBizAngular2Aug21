import { Component, OnInit } from '@angular/core';
import { Flower } from '../models/flower';
import { FlowerService } from '../services/flower.service';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent implements OnInit {

  flowers:Flower[];
  totalPrice:number;
  constructor(private flowerService:FlowerService) {
    // this.flowers = [
    //   new Flower(101,"Daisy","./assets/pictures/Pic1.jpg",3,10),
    //   new Flower(102,"Sun Flower","./assets/pictures/Pic2.jpg",0,12),
    //   new Flower(103,"Rose","./assets/pictures/Pic3.jpg",4,15),
    // ];
    this.flowers = this.flowerService.getFlowers();
    this.totalPrice = 0;
   }
   buyFlower(id){
     //console.log("Id in flowers "+id)
     var myFlower = this.flowerService.getFlower(id);
     console.log("Flower in Flowers")
     console.log(myFlower);
     var flower = new Flower();
     flower.id = myFlower.id;
     flower.name = myFlower.name;
     flower.quantity = 1;
     flower.price = myFlower.price;
     flower.pic = myFlower.pic;
     this.flowerService.buyFlower(flower)
     this.totalPrice += flower.price;
   }

  ngOnInit(): void {
  }

}
