import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders} from '@angular/common/http'
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    let reqClone = req;
    const headers = new HttpHeaders().set('Authorization',`Bearer ${ sessionStorage.getItem("token")}`)
    const token = sessionStorage.getItem("token");
    if(token != null){
      reqClone = req.clone({
        headers
      });
    }
    console.log('paso interceptor');
    return next.handle(reqClone);
    
  }
}
