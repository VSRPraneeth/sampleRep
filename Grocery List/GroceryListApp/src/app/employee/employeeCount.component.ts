import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector:"employee-count",
    templateUrl : "employeeCount.component.html",
    styleUrls:["employeeCount.component.css"]
})
export class EmployeeCountComponent{
    selectedRadioButtonValue : string = "All";
    
    @Output()
    countRadioButtonSelectionChanged : EventEmitter<string> = new EventEmitter<string>();


    @Input()
    all:number =10;
    
    @Input()
    male:number =5;
    
    @Input()
    female:number=5;

    onRadioButtonSelectionChange(){
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue);
    }

}