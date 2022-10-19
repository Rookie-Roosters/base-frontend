import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHttpResponse } from '@core/constants';
import { API_ENDPOINTS } from '@core/constants/api_endpoints.constants';
import { SessionLogInResponse } from '@shared/dtos';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  logIn(email: string, password: string): Observable<IHttpResponse<SessionLogInResponse>> {
    return this.http.post<IHttpResponse<SessionLogInResponse>>(environment.apiUrl + API_ENDPOINTS.SESSION.LOG_IN(), {
      email,
      password,
    });
  }

  signUp(
    email: string,
    firstName: string,
    lastName: string,
    password: string
  ): Observable<IHttpResponse<SessionLogInResponse>> {
    return this.http
      .post<IHttpResponse<SessionLogInResponse>>(environment.apiUrl + API_ENDPOINTS.SESSION.SIGN_UP(), {
        email,
        firstName,
        lastName,
        password,
        confirmPassword: password,
      })
      .pipe((err) => {
        return err;
      });
  }
}
