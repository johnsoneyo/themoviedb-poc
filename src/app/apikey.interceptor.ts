import { Injectable } from '@angular/core';
import { environment as env } from './../environments/environment';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApikeyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({ 
      url: request.url.concat('?api_key='.concat(env.api_key))
    });
    return next.handle(request);
  }
}
