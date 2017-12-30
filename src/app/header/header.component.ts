import {Component, ElementRef, OnInit, AfterViewInit, ViewChild, ViewEncapsulation, Renderer2} from '@angular/core';
import {SharedService} from "../../services/SharedService";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit , AfterViewInit {
@ViewChild('inOut') sessionChange: ElementRef;
  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._sharedService.setLogElement(this.sessionChange);
  }
}
