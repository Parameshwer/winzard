import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private baseUrl = environment.baseUrl
  constructor(
    private http: HttpClient
  ) { }

  getCountrysList(): Observable<any> {
    let path = this.baseUrl + 'getCountrys'
    return this.http.post<any>(path, '')
      .pipe(
        catchError(this.handleError)
      );
  }
  getAccountCompanyInfo(body): Observable<any> {
    let path = this.baseUrl + 'getAccountCompanyInfo'
    return this.http.post<any>(path, body)
      .pipe(
        catchError(this.handleError)
      );
  }
  getUpdateCompanyInfo(body): Observable<any> {
    let path = this.baseUrl + 'getUpdateCompanyInfo'
    return this.http.post<any>(path, body)
      .pipe(
        catchError(this.handleError)
      );
  }
  getUpdatePersonelInfo(body): Observable<any> {
    let path = this.baseUrl + 'getUpdatePersonelInfo'
    return this.http.post<any>(path, body)
      .pipe(
        catchError(this.handleError)
      );
  }
  getPersonelInfo(body): Observable<any> {
    let path = this.baseUrl + 'getPersonelInfo'
    return this.http.post<any>(path, body)
      .pipe(
        catchError(this.handleError)
      );
  }

  getSaveFincalYear(body): Observable<any> {
    let path = this.baseUrl + 'getSaveFincalYear'
    return this.http.post<any>(path, body)
      .pipe(
        catchError(this.handleError)
      );
  }
  getFincalYearDetails(): Observable<any> {
    let path = this.baseUrl + 'getFincalYearDetails'
    return this.http.post<any>(path, '')
      .pipe(
        catchError(this.handleError)
      );
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage)
  }
}
