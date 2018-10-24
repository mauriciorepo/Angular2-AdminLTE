import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private router: Router){}
  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    //handle your auth error or rethrow
    if (err.status === 401 || err.status === 403) {
        //navigate /delete cookies or whatever
        this.router.navigateByUrl(`/login`);
        // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
        return Observable.of(err.message);
    }
    return Observable.throw(err);
}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const authReq = request.clone({setHeaders:{'X-Mashape-Key':`${'GGG7g8uFWGmshVt07YEd27Fbf6Tmp1U19Rdjsn8MW8h2RoN7ig'}`,'Content-Type':'application/json','Accept':'application/json'}});
    // catch the error, make specific functions for catching specific errors and you can chain through them with more catch operators
    return next.handle(authReq).catch(() => {
      x=> this.handleAuthError(x)
      return next.handle(request);
      //const newReq = authReq.clone();
      //return next.handle(newReq);
    }/*x=> this.handleAuthError(x)*/); //here use an arrow functio
    //return next.handle(request);

  }
}
