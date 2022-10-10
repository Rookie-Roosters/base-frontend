import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUserDto, UserCreateDto } from '../dto';
import { Store } from 'src/app/core/models/store.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  
  //add the right server address
  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}
/*
  signUp(user: UserCreateDto): Observable<Store> {
    return this.http.post<Store>(
      `${this.BASE_URL}/authentication/sign-up`,
      user
    );
  }

  logIn(user: LoginUserDto): Observable<Store> {
    return this.http.post<Store>(
      `${this.BASE_URL}/authentication/log-in`,
      user
    );
  }*/
}
