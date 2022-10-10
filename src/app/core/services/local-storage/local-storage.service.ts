import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  public get token(){
    return localStorage.getItem('token');
  }
  public set token(token: string | null){
    localStorage.setItem('token', token || '');
  }

  public get user(): User{
    return JSON.parse(localStorage.getItem('user')|| '');
  }
  public set user(user: User){
    localStorage.setItem('user', JSON.stringify(user));
  }

  public logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

}
