import { IEmployee } from "./employee";
import { Component,  OnInit } from "@angular/core";
import { EmployeeService } from "./employee.service";



@Component({
    selector: "list-employee",
    templateUrl: "employeelist.component.html",
    styleUrls: ["employeelist.component.css"],
})


export class EmployeeListComponent implements OnInit{
    employees :IEmployee[];
  selectedEmployeeCountRadioButton: string = "All";
  statusMessage: string = "Loading Data..Please Wait.. ";
        
    constructor(private _employeeService: EmployeeService){
    }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe((employeeData) => this.employees = employeeData,
      (error) => {
        this.statusMessage = "Problem with service, please try after sometime";
        console.error(error);
      });
    }





    // getEmployeeDetails():void{
    //     this.employees = [
    //         {code: "emp101", name: "Praneeth", gender:"Male", annualSalary: 100000, dateOfBirth:"11/29/1994"},
    //         {code: "emp102", name: "Niha", gender:"Female", annualSalary: 80000.00, dateOfBirth:"08/15/1994"},
    //         {code: "emp103", name: "Taun", gender:"Male", annualSalary: 60000, dateOfBirth:"12/01/1994"},
    //         {code: "emp104", name: "Pavani", gender:"Female", annualSalary: 85000.00, dateOfBirth:"06/21/1993"},
    //         {code: "emp105", name: "Gowtham", gender:"Male", annualSalary: 120000, dateOfBirth:"04/13/1994"},
    //         {code: "emp106", name: "Vivek", gender:"Female", annualSalary: 110000, dateOfBirth:"11/27/1994"}
    //     ]
    // }
    trackByEmployeeCode(index:number, employee:any):string {
        return employee.code;
    }

    getTotalEmployeesCount() : number{
        return this.employees.length;
    }
    getMaleEmployeesCount() : number{
        return this.employees.filter(e => e.gender === "Male").length;
    }
    getFemaleEmployeesCount() : number{
        return this.employees.filter(e=> e.gender === "Female").length;
    }
    onEmployeeCountRadioButtonChange(selectectedRadioButtonValue:string){
        this.selectedEmployeeCountRadioButton = selectectedRadioButtonValue;
    }

    // private _employeeService: EmployeeService;

    // constructor(_employeeService: EmployeeService){
    //     this._employeeService = _employeeService;
    // }

}
