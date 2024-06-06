import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from './employees/guard/verify-token.guard';

const routes: Routes = [
  {
    path:'Home',
    loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'Empleados',
    loadChildren:()=>import('./employees/employees.module').then(m=>m.EmployeesModule),canActivate:[verifyTokenGuard]
  },
  {path:'**', redirectTo:'Home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
