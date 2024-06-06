import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { FormOTPComponent } from './components/form-otp/form-otp.component';
import { NumberOTPComponent } from './components/number-otp/number-otp.component';
import { OtpGuard } from './guard/otp.guard';
import { sessionVerifyGuard } from './guard/session-verify.guard';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {path:'otp', component:FormOTPComponent,canActivate:[sessionVerifyGuard]},
      {path:'num', component:NumberOTPComponent,canActivate:[OtpGuard]},
      {path:'**', redirectTo:'otp'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
