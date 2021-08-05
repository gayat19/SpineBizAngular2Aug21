import { Component, OnInit } from '@angular/core';
import { Flower } from '../models/flower';
import { FlowerService } from '../services/flower.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
myCart:Flower[];
  constructor(private flowerService:FlowerService) {
      this.myCart = this.flowerService.cart;
   }

  ngOnInit(): void {
  }

}
