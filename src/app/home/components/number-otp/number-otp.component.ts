import { Component, inject } from '@angular/core';
import { VerifyOTPService } from '../../services/verify-otp.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-number-otp',
  templateUrl: './number-otp.component.html',
  styleUrl: './number-otp.component.scss'
})
export class NumberOTPComponent {
  verifyOTPService = inject(VerifyOTPService); 
  nums:string="";
  public tokenForm: FormGroup = this.fb.group({
    num1: ['', Validators.required],
    num2: ['', Validators.required],
    num3: ['', Validators.required],
    num4: ['', Validators.required],
    num5: ['', Validators.required],
    num6: ['', Validators.required],
    
  });

  constructor(private fb: FormBuilder,private router: Router) {}

  onVerify(){
    for (let clave in this.tokenForm.value){
     this.nums+=this.tokenForm.value[clave];
    }
   
    this.verifyOTPService.verifyOTP(this.nums).subscribe((res:any)=>{
      localStorage.setItem('verify',JSON.parse(res.status))
      console.log(res);
      this.router.navigate(['Empleados'])
    })
    
  }


 
}
