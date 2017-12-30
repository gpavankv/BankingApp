import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable()
export class UserService{
  private _user: User;

  setLoginData(user: User) {
    this._user = user;
  }

  getLoginData() {
    return this._user;
  }
}
