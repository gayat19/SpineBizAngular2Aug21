import { Employee } from "../models/employee";

export class EmployeeService{
    employees:Employee[];
    constructor(){
        this.employees = [
            new Employee(101,'Ramu'),
            new Employee(102,'Bimu'),
            new Employee(103,'Somu')
        ];
    }
}