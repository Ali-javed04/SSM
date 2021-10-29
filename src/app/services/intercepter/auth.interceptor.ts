import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';
import _ from 'lodash';
import { AuthService } from '../auth/auth.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


      if (this.authService.getToken()) {
        request = this.addToken(request, this.authService.getToken())
      }



    return next.handle(request).pipe(tap((httpEvent: HttpEvent<any>) => {
      this.getRollForwardTokenIfAvailable(httpEvent)
    }, (httpResponse: HttpResponse<any>) => {
      if (httpResponse instanceof HttpErrorResponse && httpResponse.status === 401) {
      }
    }));

  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        DataType: "json",
        ContentType:'application/json;charset=UTF-8'
      }
    });
  }



  protected getRollForwardTokenIfAvailable(httpEvent: HttpEvent<any>) {
    if (!(httpEvent instanceof HttpResponse)) {
      return
    }

    const response: HttpEvent<any> = httpEvent
    if (!response.headers.get('X-Roll-Forward-Token')) {
      return
    }

  }



  private storeJwtToken(jwt: string) {
    localStorage.setItem('authenticatedByLoginToken', jwt);
  }
}
