import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHttpResponse } from '@core/constants';
import { API_ENDPOINTS } from '@core/constants/api_endpoints.constants';
import { SessionLogInResponse, User } from '@shared/dtos';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<IHttpResponse<User[]>> {
    const token = localStorage.getItem('authToken');
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };
    console.log(localStorage.getItem('userId'));
    return this.http.get<IHttpResponse<User[]>>(environment.apiUrl + API_ENDPOINTS.USERS.BASE_PATH, header);
  }
}
