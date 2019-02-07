import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
                <h1>{{ getFullName() }}</h1>
                <img src= '{{ imageSrc }}'/>
                <my-employee></my-employee>
                </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageHeader : string = 'Employee details';
  imageSrc : string = '../assets/743.jpg';

  firstName: string = 'Praneeth';
  lastName: string = 'Vemulapalli';

  getFullName() :string {
    return this.firstName + ' ' + this.lastName;
  }
}
