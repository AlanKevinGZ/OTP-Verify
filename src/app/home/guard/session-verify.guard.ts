import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const sessionVerifyGuard: CanActivateFn = (route, state) => {
  let routing=inject(Router)
  let tokenLs=JSON.parse(localStorage.getItem('verify')|| 'false');
 
 if(tokenLs){
  routing.navigate(['Empleados'])
  return false
}
 
  
  return true;
};
