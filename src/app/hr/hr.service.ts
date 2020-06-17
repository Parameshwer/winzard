import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class HrService {
  private baseUrl = environment.baseUrl
  constructor(
    private http: HttpClient
  ) { }

  getGradeList():Observable<any> {
    let path = this.baseUrl + 'getGrades'
    return this.http.post<any>(path, '')
      .pipe(
        catchError(this.handleError)
      );
  }

  getEmployeeList(body):Observable<any> {
    let path = this.baseUrl + 'talent/getTalentGradeEmployees'
    return this.http.post<any>(path, body)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  getSaveTalentManagerIntiate(body):Observable<any> {
    let path = this.baseUrl + 'talent/getSaveTalentManager'
    return this.http.post<any>(path, body)
    .pipe(
      catchError(this.handleError)
    );
  }

  getDueTalentSurveyEmployees(body):Observable<any> {
    let path = this.baseUrl + 'talent/getDueTalentSurveyEmployees'
    return this.http.post<any>(path, body)
    .pipe(
      catchError(this.handleError)
    );
  } 
  getUpdateTalentSurveyStatus(body):Observable<any> {
    let path = this.baseUrl + 'talent/getUpdateTalentSurveyStatus'
    return this.http.post<any>(path, body)
    .pipe(
      catchError(this.handleError)
    );
  } 
  getTalentSurveys(body):Observable<any> {
    let path = this.baseUrl + 'talent/getTalentSurveys'
    return this.http.post<any>(path, body)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRemindTalentDueEmployees(body):Observable<any> {
    let path = this.baseUrl + 'talent/getRemindTalentDueEmployees'
    return this.http.post<any>(path, body)
    .pipe(
      catchError(this.handleError)
    );
  }
  getCheckActiveStatusReviews(body):Observable<any> {
    let path = this.baseUrl + 'talent/getCheckActiveStatusReviews'
    return this.http.post<any>(path, body)
    .pipe(
      catchError(this.handleError)
    );
  }


  getEditTalentSurveyById(body):Observable<any> {
    let path = this.baseUrl + 'talent/getEditTalentSurveyById'
    return this.http.post<any>(path, body)
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
