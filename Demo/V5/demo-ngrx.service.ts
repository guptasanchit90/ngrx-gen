import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/**
 * 1. Avoid injecting *store* to a service
 * 2. Service does not need to know if we are using NGRX
 * 3. Keep functions simple, one task one function
 * 4. Keep functions which needs to accessed from Effects as public
 */

@Injectable()
export class DemoNgrxService {

  constructor(private http: Http) { }

  get(): Observable<any> {
    return this.http.get('https://yourapi.com');
  }

}
