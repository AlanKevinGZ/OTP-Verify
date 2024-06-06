import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { SendOTPService } from '../../services/send-otp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-otp',
  templateUrl: './form-otp.component.html',
  styleUrls: ['./form-otp.component.scss'],
})
export class FormOTPComponent {
  senOTPService = inject(SendOTPService);

  message: string = '';
  status: boolean = false;

  public formSend: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    last: ['', Validators.required],
    phone: ['', [Validators.required]],
  });


  constructor(private fb: FormBuilder,private router: Router) {}

  senOtp() {
    if (this.isFormInvalid()) return 
    this.senOTPService
      .getSenOTP()
      .subscribe(
        (response: any) => {
          this.status = response.status;
          if (response.status) {
            this.message = response.message;
            this.senOTPService.setFormInvalid(response.status)
            this.router.navigate(['Home/num']);
          } else {
            this.message = response.errors;
          }
          this.clearMessage();
        },
        (error) => {
          console.log(error);
        }
      );
  }

   isFormInvalid(): boolean {
    return this.formSend.invalid;
  }


  clearMessage() {
    setTimeout(() => {
      this.message = '';
    }, 5000);
  }

  
}
