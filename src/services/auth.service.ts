import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  allow;
  constructor() { }
  verify(email: String, password: String): boolean {
    if (email === 'sankar@gmail.com' && password === 'sankar') {
      this.allow = true;
      return true;
    } else {
      return false;
    }
  }
}
