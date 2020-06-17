import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, retry } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class InsightsService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getValueTypes(body): Observable<any> {
    let path = this.baseUrl + "getValuesByType";
    return this.http.post<any>(path, body).pipe(catchError(this.handleError));
  }

  getInsightsData(body): Observable<any> {
    let path = this.baseUrl + "talent/getInsightsTalentReview";
    return this.http.post<any>(path, body).pipe(catchError(this.handleError));
  }


  getTalentDates(): Observable<any> {
    let path = this.baseUrl + "talent/getTalentSurveyStartDates";
    return this.http.post<any>(path, "").pipe(catchError(this.handleError));
  }

  saveInsights(params): Observable<any> {
    let path = this.baseUrl + "talent/getUpdateTalentInsights";
    return this.http.post<any>(path, params).pipe(catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
