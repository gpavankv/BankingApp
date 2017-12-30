import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/UserService';
import { User } from '../../model/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  password;
  onVerify;
  user: User;
  constructor(private _auth: AuthService, private _router: Router, private userData: UserService) { }

  onSubmit(){
    this.onVerify = this._auth.verify(this.email, this.password);
    if (this.onVerify === false) {
      document.getElementById('warning').innerHTML = 'email and password wrong please check!';
    } else {
      this.user = new User();
      this.user.firstName = 'Sankar';
      this.user.lastName = 'Reddy';
      this.user.userEmail = this.email;
      this.userData.setLoginData(this.user);
      this._router.navigate(['main']);
    }
  }
  ngOnInit() {
  }

}
