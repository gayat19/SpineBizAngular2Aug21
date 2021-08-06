import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { FlowerComponent } from './flower/flower.component';
import { FlowersComponent } from './flowers/flowers.component';
import { FlowerService } from './services/flower.service';
import { CartComponent } from './cart/cart.component';
import { AddFlowerComponent } from './add-flower/add-flower.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { LandingComponent } from './landing/landing.component';
import { ItesComponent } from './ites/ites.component';

const routes: Routes = [
  
  {path:'home',component:CustomerComponent},
  {path:'buy',component:FlowersComponent},
  {path:'add',component:AddFlowerComponent},
  {path:'login',component:LoginComponent},
  {path:'welcome/:un',component:WelcomeComponent},
  {path:'employee',component:EmployeesComponent,children:[
    {path:'emp/:id',component:EmployeeComponent}
  ]},
  {path:'',component:LoginComponent},
  {path:'item',component:ItesComponent},
  {path:'**',component:LandingComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
