import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

export class HttpErrorInterceptor implements HttpInterceptor {
  constructor( private router: Router) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        
      }
      return event;
    }), catchError((err: any) => {
     
      if (err.status === 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
      //const { error } = err || {};
      console.log(err, 'http');
      
      throw err;
    }));
  }
}