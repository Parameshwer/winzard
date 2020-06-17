import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { catchError, retry } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { MatDialog } from "@angular/material";
import { ConfirmDialogComponent } from "../shared/components/confirm-dialog/confirm-dialog.component";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient, private dialog: MatDialog) {}

  openConfirmDialog(msg, type, autoClose?, callback?): void {
    console.log(17);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "600px",
      panelClass: "confirm-dialog",
      autoFocus: false,
      data: {
        msg: msg,
        type: type,
        autoClose:autoClose?autoClose:''
      },
    });

    dialogRef.afterClosed().subscribe((result) => {            
      if (result && callback) {
        callback();
      }
    });
  }

  validateLoginUser(body): Observable<any> {
    let path = this.baseUrl + "authenticate";
    return this.http.post<any>(path, body).pipe(catchError(this.handleError));
  }
  getForgotPassword(body): Observable<any> {
    let path = this.baseUrl + "getForgotPassword";
    return this.http.post<any>(path, body).pipe(catchError(this.handleError));
  }
  getVerifyOTP(body): Observable<any> {
    let path = this.baseUrl + "getVerifyOTP";
    return this.http.post<any>(path, body).pipe(catchError(this.handleError));
  }
  getResetPassword(body): Observable<any> {
    let path = this.baseUrl + "getResetPassword";
    return this.http.post<any>(path, body).pipe(catchError(this.handleError));
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
