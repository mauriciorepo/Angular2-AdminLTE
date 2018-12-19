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

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const authReq = request.clone(
      // tslint:disable-next-line:max-line-length
      {setHeaders: {'X-Mashape-Key': `${'GGG7g8uFWGmshVt07YEd27Fbf6Tmp1U19Rdjsn8MW8h2RoN7ig'}`, 'Content-Type': 'application/json', 'Accept': 'application/json'}});
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
