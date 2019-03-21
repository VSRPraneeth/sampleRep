import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
                <div style = "padding: 5px">
                  <ul class = "nav nav-tabs">
                  <li routerLinkActive = "active"><a routerLink = "home">Home</a></li>
                  <li routerLinkActive = "active"><a routerLink = "employees">Employees</a></li>
                  </ul>
                  <router-outlet></router-outlet>
                </div>

            `,
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

    userInput:string="Praneeth";

}
