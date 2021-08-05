import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Flower } from '../models/flower';
import { FlowerService } from '../services/flower.service';

@Component({
  selector: 'app-add-flower',
  templateUrl: './add-flower.component.html',
  styleUrls: ['./add-flower.component.css']
})
export class AddFlowerComponent implements OnInit {

  flower:Flower;
  message:string;
  formGroup:FormGroup;
  constructor(private flowerService:FlowerService) {
    this.flower = new Flower();
    this.formGroup = new FormGroup(
      {
        id:new FormControl(null,Validators.required),
        name:new FormControl(null,[Validators.required,Validators.pattern("[a-zA-z]*")]),
        price:new FormControl(null,[Validators.required,Validators.min(1)]),
        quantity:new FormControl(null,[Validators.required,Validators.min(1)]),
      }
    );
   }
   
   public get id(){
     return this.formGroup.get("id")
   }
   public get name(){
    return this.formGroup.get("name")
  }
  public get price(){
    return this.formGroup.get("price")
  }
  public get quantity(){
    return this.formGroup.get("quantity")
  }
   
   addNewFlower(){
    if(this.formGroup.valid)
    {
      this.flower.id = this.id.value;
      this.flower.name = this.name.value;
      this.flower.price = this.price.value;
      this.flower.quantity = this.quantity.value;
      this.flowerService.addFlower(this.flower);
      this.message = undefined
    }
    else
      this.message="Please give valid inputs"
     //this.flower = new Flower();
   }
   reset(){
    this.flower = new Flower();
   }
  ngOnInit(): void {
    var num:number;
    //num = "Welcome";
  }

}
