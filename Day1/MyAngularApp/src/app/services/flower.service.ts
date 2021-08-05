import { cwd } from "process";
import { BrowserStack } from "protractor/built/driverProviders";
import { Flower } from "../models/flower";

export class FlowerService{
    flowers:Flower[];
    cart:Flower[];
  constructor() {
      this.cart=[];
    this.flowers = [
      new Flower(101,"Daisy","./assets/pictures/Pic1.jpg",3,10),
      new Flower(102,"Sun Flower","./assets/pictures/Pic2.jpg",0,12),
      new Flower(103,"Rose","./assets/pictures/Pic3.jpg",4,15),
    ];
   }

   getFlowers():Flower[]{
        return this.flowers;
   }
   getFlower(id:number):Flower{
        var flower:Flower =null;
        for (let index = 0; index < this.flowers.length; index++) {
           if(this.flowers[index].id==id)
           {
               flower = this.flowers[index];
              break;
           }
        }
        return flower;
   }
   addFlower(flower:Flower){
       var flowerPresent = this.getFlower(flower.id)
       if(flowerPresent != null){
           flowerPresent.quantity += flower.quantity;
       }
       else{
           this.flowers.push(flower);
       }
   }
   buyFlower(flower:Flower):boolean{
    for (let index = 0; index < this.flowers.length; index++) {
        if(this.flowers[index].id==flower.id)
        {
            if(this.flowers[index].quantity >= flower.quantity)
            {
                this.flowers[index].quantity -= flower.quantity;
                var flag = false;
                for (let index = 0; index < this.cart.length; index++) {
                    if(this.cart[index].id==flower.id)
                    {
                        this.cart[index].quantity += flower.quantity;
                        flag = true;
                        break;
                    }
                }
                if(flag==false)
                    this.cart.push(flower);
                }
                return true;
            }
        }
        return false;
   }
   emptyCart(){
       this.cart = [];
   }
}