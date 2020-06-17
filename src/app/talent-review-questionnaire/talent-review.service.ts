import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TalentReviewService {
  private baseUrl = environment.baseUrl
  constructor(
    private http: HttpClient
  ) { }

  getQuestionsBasedonUser(): Observable<any> {
    let path = this.baseUrl + 'talent/getQuestionsBasedonUser'
    return this.http.post<any>(path, '')
      .pipe(
        catchError(this.handleError)
      );
  }

  saveQuestionsBasedonUser(body): Observable<any> {
    let path = this.baseUrl + 'talent/getInsertTalentReviewAnswers'
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
