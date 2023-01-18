import { Injectable, Injector} from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { HttpInterceptor, HttpRequest,HttpHandler,HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokeninService implements HttpInterceptor{

  constructor(private inje:Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  const rou=this.inje.get(StorageService)
  const token1=req.clone({
    setHeaders:{'x-access-token':`${rou.getToken()}`}
  })
  return next.handle(token1)  
  }
}
