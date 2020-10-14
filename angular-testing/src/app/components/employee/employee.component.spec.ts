import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationService } from 'src/app/services/authentication.service';

import { EmployeeComponent } from './employee.component';

xdescribe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let authService: AuthenticationService;
  let h3: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeComponent],
      providers: [AuthenticationService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    authService = TestBed.inject(AuthenticationService);
    component = fixture.componentInstance;
    h3 = fixture.nativeElement.querySelector('h3');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assert value for "h3" element to be the value of component.salSlip', () => {
    component.getSalarySlip();
    fixture.detectChanges();
    expect(h3.textContent).toBe(component.salSlip);
  });

  // it('should assert "checkAuthentication" has been called', () => {
  //   spyOn(authService, 'checkAuthentication').and.returnValue(false);
  //   let salSlip = component.getSalarySlip();
  //   expect(salSlip).toEqual('Salary Slip');
  //   expect(authService.checkAuthentication).toHaveBeenCalled();
  // });
});
