import { Component } from '@angular/core';

@Component({
    selector: 'my-employee',
    templateUrl: 'employee.component.html',
    styleUrls: ['employee.component.css']
})
 
export class EmployeeComponent{
  lastName: string = 'Vemulapalli';
  firstName: string = 'Praneeth';
  gender: string = 'Male';
  age: number = 24;
}