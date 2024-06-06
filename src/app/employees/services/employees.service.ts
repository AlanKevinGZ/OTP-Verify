import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) { }

  getEmployees(id:string){
    return this.http.get(`${this.baseUrl}/ruc/${id}`)
  }
}
