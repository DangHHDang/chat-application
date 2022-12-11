import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor() {} 
 intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
    const token = JSON.parse(JSON.stringify(localStorage.getItem('token')))

   if (token) {
     // If we have a token, we set it to the header
     request = request.clone({
        setHeaders: {'Authorization': `Bearer ${token}`}
     });
  }

  return next.handle(request).pipe(
  	catchError((err) => {
   	 if (err instanceof HttpErrorResponse) {
       	 if (err.status === 401) {
       	 // redirect user to the logout page
     	}
 	 }
  	return throwError(err);
	})
   )
  }
}