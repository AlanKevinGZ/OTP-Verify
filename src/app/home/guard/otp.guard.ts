import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SendOTPService } from '../services/send-otp.service';

@Injectable({
  providedIn: 'root'
})
export class OtpGuard implements CanActivate {

  constructor(private router: Router,private formStateService: SendOTPService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  
    const isFormFilled = this.formStateService.getFormInvalid();

    if(!isFormFilled){
      this.router.navigate(['Home']);
      return false;
    }
    
    return true;
  }
}
