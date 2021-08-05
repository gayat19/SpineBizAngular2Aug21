import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username:string;
  constructor(private aciveRoute:ActivatedRoute) { 
      this.username = this.aciveRoute.snapshot.params["un"]
  }

  ngOnInit(): void {
  }

}
