import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpEvent } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>>{
        return next.handle(req).pipe(
            catchError(ERR => {
                if(ERR.status===401)
                {
                    return throwError(ERR.statusText);
                }
                if( ERR instanceof HttpErrorResponse)
                {
                    const applicationError = ERR.headers.get('Application-Error');
                    if(applicationError)
                    {
                        return throwError(applicationError);
                    }
                    const serverError = ERR.error;
                    let modalstateerrors = '';
                    if(serverError.errors && typeof serverError.errors==='object')
                    {
                        for(const key in serverError.errors )
                        {
                            serverError.errors[key];
                            modalstateerrors += serverError.errors[key] + '\n';
                        }
                    }
                    return throwError(modalstateerrors || serverError ||'Server Error ');
                }

            }
            )
        )
    }

}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,                       
    useClass: ErrorInterceptor,                      
    multi: true
};