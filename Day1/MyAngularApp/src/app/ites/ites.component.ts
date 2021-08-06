import { Component, OnInit } from '@angular/core';
import { timeStamp } from 'console';

@Component({
  selector: 'app-ites',
  templateUrl: './ites.component.html',
  styleUrls: ['./ites.component.css']
})
export class ItesComponent implements OnInit {
item;
cardNumber;
className;
  constructor() { 
    this.item = {
      name:"Ballons",
      price:20,
      isFav:true
    };
    this.className = "glyphicon glyphicon-heart";
  }
  toggle(){
    this.item.isFav = !this.item.isFav;
  }

  ngOnInit(): void {
  }

}
