import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerifyOTPService {
  private baseUrl = '/api';
  constructor(private http: HttpClient) { }

  verifyOTP(token:string){
    return this.http.post(`${this.baseUrl}/verify-code?code=${token}`,{});
  }
}
