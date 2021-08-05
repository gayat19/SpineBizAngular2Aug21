import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class DbService{
    constructor(private httpClient:HttpClient){

    }
    getPosts(){
        return this.httpClient.get("https://my-json-server.typicode.com/typicode/demo/db")
    }
}