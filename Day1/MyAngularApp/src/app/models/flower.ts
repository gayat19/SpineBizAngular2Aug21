import { toBase64String } from "@angular/compiler/src/output/source_map";


export class Flower{
    id:number;
    name:string;
    pic:string;
    quantity:number;
    price:number;
    constructor(id?:number,name?:string,pic?:string,qty?:number,price?:number){
        this.id = id;
        this.name = name;
        this.pic = pic;
        this.quantity = qty;
        this.price = price;
    }
}