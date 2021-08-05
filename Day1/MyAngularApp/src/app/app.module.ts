import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { FlowerComponent } from './flower/flower.component';
import { FlowersComponent } from './flowers/flowers.component';
import { FlowerService } from './services/flower.service';
import { CartComponent } from './cart/cart.component';
import { AddFlowerComponent } from './add-flower/add-flower.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeService } from './services/employee.service';
import { TextPipe } from './text.pipe';
import { DbService } from './services/db.service';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    FlowerComponent,
    FlowersComponent,
    CartComponent,
    AddFlowerComponent,
    LoginComponent,
    WelcomeComponent,
    EmployeeComponent,
    EmployeesComponent,
    TextPipe,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FlowerService,EmployeeService,DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
