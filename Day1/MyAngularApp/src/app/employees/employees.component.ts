import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeeRules:string;
  employees:Employee[];
  constructor(private employeeService:EmployeeService,private router:Router) { 
    this.employees = this.employeeService.employees;
    this.employeeRules ="sjfgaesjghfkshdnflkshdklfsd"
  }
  show(id)
  {
      this.router.navigate(['employee/emp',id])
  }
  ngOnInit(): void {
  }

}
