import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const verifyTokenGuard: CanActivateFn = (route, state) => {
  let routing=inject(Router)
  let tokenLs=JSON.parse(localStorage.getItem('verify')|| 'false');
if(!tokenLs){
  routing.navigate(['Home'])
  return false
}
  
  return true;
};
