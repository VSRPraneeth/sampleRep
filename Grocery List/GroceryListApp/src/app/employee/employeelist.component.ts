import { Component } from "@angular/core";

@Component({
    selector:"list-employee",
    templateUrl: "employeelist.component.html",
    styleUrls: ["employeelist.component.css"]
})


export class EmployeeListComponent{
    employees :any[];
    
    constructor(){
        this.employees = [
            {code: "emp101", name: "Praneeth", gender:"Male", annualSalary:"100000", dateOfBirth:"11/29/1994"},
            {code: "emp102", name: "Taun", gender:"Male", annualSalary:"60000", dateOfBirth:"12/01/1994"},
            {code: "emp103", name: "Gowtham", gender:"Female", annualSalary:"120000", dateOfBirth:"04/13/1994"},
            {code: "emp104", name: "Vivek", gender:"Female", annualSalary:"110000", dateOfBirth:"11/27/1994"}
        ]
    }

    getEmployeeDetails():void{
        this.employees = [
            {code: "emp101", name: "Praneeth", gender:"Male", annualSalary:"100000.26", dateOfBirth:"11/29/1994"},
            {code: "emp102", name: "Taun", gender:"Male", annualSalary:"60000.564", dateOfBirth:"12/01/1994"},
            {code: "emp103", name: "Gowtham", gender:"Female", annualSalary:"120000.56452", dateOfBirth:"04/13/1994"},
            {code: "emp104", name: "Vivek", gender:"Female", annualSalary:"110000.2", dateOfBirth:"11/27/1994"},
            {code: "emp105", name: "Niha", gender:"Female", annualSalary:"80000.00", dateOfBirth:"08/15/1994"}
        ]
    }
    trackByEmployeeCode(index:number, employee:any):string {
        return employee.code;
    }
}