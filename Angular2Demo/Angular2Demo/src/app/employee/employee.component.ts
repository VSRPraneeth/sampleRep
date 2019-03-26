import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { ActivatedRoute } from '@angular/router'
import { EmployeeService } from './employee.service';
import { error } from '@angular/compiler/src/util';
@Component({
    selector: 'my-employee',
    templateUrl: 'employee.component.html',
    styleUrls: ['employee.component.css']
})

export class EmployeeComponent implements OnInit {

  employee: IEmployee;
  statusMessage: string = "Loading Data. PLease Wait..";

  constructor(private _employeeService: EmployeeService, private _activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    let empCode: string = this._activatedRoute.snapshot.params['code'];
    this._employeeService.getEmployeeByCode(empCode).subscribe(
      (employeeData) => {
        if (employeeData == null) {
          this.statusMessage = "Employee not fouud in the database";
        } else {
          this.employee = employeeData;
        }   
      },
      (error) => {
        this.statusMessage = "Problem with the service.. Please try again after sometime.";
        console.log(error);
      }
    );
  }
  //lastName: string = 'Vemulapalli';
  //firstName: string = 'Praneeth';
  //gender: string = 'Male';
  //age: number = 24;
  //showDetails : boolean = false;
  
  //toggleDetails(): void{
  //  this.showDetails = !this.showDetails;
  //}

}
