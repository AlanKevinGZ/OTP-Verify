import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { FormOTPComponent } from './components/form-otp/form-otp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NumberOTPComponent } from './components/number-otp/number-otp.component';
import {MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    LayoutComponent,
    FormOTPComponent,
    NumberOTPComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
