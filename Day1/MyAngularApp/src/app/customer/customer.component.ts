import { Component } from "@angular/core";
import { DbService } from "../services/db.service";

@Component({
    selector:'app-customer',
    templateUrl:'./customer.component.html',
    styleUrls:['./customer.component.css']
})
export class CustomerComponent{
data;
posts;
constructor(private dbService:DbService){
   // this.data = "Hello"
}
    getData(){
        this.dbService.getPosts().subscribe((data)=>{
            this.posts = data["posts"];
            //console.log(data["posts"])
        })
    }
}