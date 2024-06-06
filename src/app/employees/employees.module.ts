import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ListEmployeesComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
