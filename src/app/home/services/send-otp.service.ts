import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendOTPService {
  private baseUrl = '/api';
  private isFormInvalid: boolean = false;

  constructor(private http: HttpClient) { }

  getSenOTP(){
    return this.http.get(`${this.baseUrl}/send-code`);
  }
  setFormInvalid(value: boolean) {
    this.isFormInvalid = value;
  }

  getFormInvalid(): boolean {
    return this.isFormInvalid;
  }
}
