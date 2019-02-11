import { Component } from '@angular/core';
import { splitClasses, StylesCompileDependency } from '@angular/compiler';

@Component({
  selector: 'app-root',
  template: `<div>
                <h1>{{ getFullName() }}</h1>
                <img [src]= 'imageSrc'/>
                <my-employee></my-employee>
                <button disabled ={{isDisabled}}>Click Me!</button>
                <span bind-innerHTML='pageHeader'></span>
                <div [innerHTML] = 'badHTML'></div>
                <input id ="inputId" type = "text" value ="Tom">

                <br/>
                <button class ='colorClass' [ngClass] ='addClasses()'>My  button</button>
                <br/>
                <button style ='color:red' [style.font-weight] = "isBold ? 'bold' : 'normal' ">My  button</button>
                <br/>
                <button style ='color:red' [style.font-size.px] = "fontSize">My  button</button>
                <br/>
                <button style ='color:red' [ngStyle] = "addStyles()">My  button</button>
                <br/>
                <button (click)="onClick()">Submit</button>
                <br/>
                <my-employee></my-employee>
                <br/>
                Name : <input [value] = "name" (input) ="name = $event.target.value" />
                <br/>
                You entered: {{name}}
                <br/>
                Name : <input [(ngModel)] = "name"/>
                <br/>
                You entered: {{name}}
                <br/>
                <list-employee></list-employee>
            

                </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageHeader : string = 'Employee details';
  imageSrc : string = '../assets/743.jpg';
  isDisabled: boolean = false;
  badHTML: string = 'Hello <script>alert("Hacked");</script> World';

  firstName: string = 'Praneeth';
  lastName: string = 'Vemulapalli';

  getFullName() :string {
    return this.firstName + ' ' + this.lastName;
  }

  classesToApply:string = 'italicsClass boldClass';
  applyItalicsClass:boolean = true;
  applyBoldClass:boolean = true;

  addClasses(){
    let classes ={
      boldClass : this.applyBoldClass,
      italicsClass : this.applyItalicsClass
    };
    return classes;  
  }

  isBold: boolean = true;
  isItalic: boolean = true;
  fontSize:number = 30;


  addStyles(){
    let styles ={
      'font-size.px': this.fontSize,
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-style': this.isItalic ? 'bold' : 'normal'
    };
    return styles;
  }

    onClick(): void {
      console.log("Hey! How's it going");
    }

    name:string ="Tom";

}
