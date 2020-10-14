import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  salSlip: string;

  constructor(private authService: AuthenticationService) {
    this.authService.authenticate();
  }

  ngOnInit(): void {}

  getSalarySlip() {
    if (this.authService.checkAuthentication()) {
      this.salSlip = 'Salary Slip';
    } else {
      this.salSlip = 'Not Authenticated';
    }
  }
}
