import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
empl_id;
  constructor(private activeRoute:ActivatedRoute) {
    //this.empl_id = this.activeRoute.snapshot.params["id"];

   }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((p)=>{
      this.empl_id = p.id;
    })
  }

}
