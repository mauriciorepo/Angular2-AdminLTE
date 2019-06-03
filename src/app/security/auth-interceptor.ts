import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}
  private handleAuthError(err: HttpErrorResponse): Observable<any> {

    if (err.status === 401 || err.status === 403) {
        this.router.navigateByUrl(`/login`);
        return Observable.of(err.message);
    }
    return Observable.throw(err);
}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = request.clone(
      // tslint:disable-next-line:max-line-length
      {setHeaders: {'X-RapidAPI-Host': `${'leolima77-tabela-fipe.p.rapidapi.com'}` ,'X-RapidAPI-Key': `${'ygk9TfQTYkmshWGYDOmnaP8juGAmp18jrwMjsnLnxKnJIY3mJQ'}`, 'Content-Type': 'application/json', 'Accept': 'application/json'}});
    // catch the error, make specific functions for catching specific errors and you can chain through them with more catch operators
    return next.handle(authReq).catch(() => {
      x => this.handleAuthError(x)
      return next.handle(request);
      //const newReq = authReq.clone();
      //return next.handle(newReq);
    }/*x=> this.handleAuthError(x)*/); //here use an arrow functio
    //return next.handle(request);

  }
}
