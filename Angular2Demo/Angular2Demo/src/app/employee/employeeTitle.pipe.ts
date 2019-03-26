import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
    name: "employeeTitle"
})

export class EmployeeTitlePipe implements PipeTransform {
    transform(value:string, gender : string): string{
        if(gender.toLowerCase() == "male")
            return "Mr." + value;
        return "Mrs." + value;
    }

}