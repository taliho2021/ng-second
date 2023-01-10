import { Authenticate } from '@ng-second/data-models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  login(authenticate: Authenticate): Observable<any> {
    return this.http.post('https://localhost:3000/login', authenticate);
  }
}
