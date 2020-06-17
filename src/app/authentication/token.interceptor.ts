import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';


const APP: any = JSON.parse(localStorage.getItem('userInfo'));
@Injectable()

export class TokenInterceptor implements HttpInterceptor {
  private token;
  constructor(public authService: AuthService, private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // add authorization header with basic auth credentials if available
    // if (localStorage.getItem('userInfo')){
    //   const info = JSON.parse(localStorage.getItem('userInfo'));
    //   request = request.clone({ setHeaders: { 'Authorization': `Bearer ${info.data.token}` } });
    //   return next.handle(request);
    // } 
    // return next.handle(request);

    const info = JSON.parse(localStorage.getItem('userInfo'));
    if (info) {
      req = req.clone({ headers: req.headers.set('Authorization', `Bearer ${info.data.token}`) });
    }
    return next.handle(req).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        console.log(event, 'HttpResponse');
      }
      return event;
    }), catchError((err: any) => {
      if (err.status === 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
      } else if (err.status === 500) {
        console.log(err);
        this.authService.openConfirmDialog(err.error.msg, 'error')
        // code - 3 --> failure
        // code -- 5 --> true
        //role -- 1 - hr
      }
      throw err;
    }));
  }
}
