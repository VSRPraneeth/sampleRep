import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class EmployeeService{

  constructor(private _http: HttpClient) { }
  getEmployees(): Observable<IEmployee[]>{
    return this._http.get("http://localhost:58040/api/employees").pipe(map((response: Response) => <IEmployee[]><unknown>response), catchError(this.handleError));
  }

  getEmployeeByCode(empCode: string): Observable<IEmployee> {
    return this._http.get("http://localhost:58040/api/employees/" + empCode).pipe(map((response: Response) => <IEmployee><unknown>response), catchError(this.handleError));
  }

  handleError(error: Response) {
    console.error(error);
    return throwError(error);
  }
}
