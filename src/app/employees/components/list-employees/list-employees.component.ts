import { Component, OnInit, inject } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.scss'
})
export class ListEmployeesComponent implements OnInit {

  employeesServices=inject(EmployeesService)
  employeesList:any=null;

  constructor(){}
  ngOnInit(): void {
    this.employeesServices.getEmployees('1234567890001').subscribe((res:any)=>{  
      this.employeesList=res.data;
    })
  }


  logout() {
    localStorage.removeItem('verify');
    window.location.reload();
  }


  
}
