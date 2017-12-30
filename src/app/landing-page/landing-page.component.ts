import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { UserService } from '../../services/UserService';
import { User } from '../../model/user';
import { AuthService } from '../../services/auth.service';
import {SharedService} from '../../services/SharedService';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  @ViewChild('inOut') headerComp: ElementRef;
  user: User = new User();

  constructor(
    private userData: UserService,
    private _auth: AuthService,
    private _sharedService: SharedService
  ) { }

  ngOnInit() {
    this.user = this.userData.getLoginData();
    if (this._auth.allow === true) {
      this._sharedService.changeLogSessionName();
    }
  }

}
