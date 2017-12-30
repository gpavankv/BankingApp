import { ElementRef, Injectable} from '@angular/core';

@Injectable()
export class SharedService{
  logNameObject: ElementRef;
  constructor() {}

  setLogElement(elem: ElementRef){
    this.logNameObject = elem;
  }
  changeLogSessionName() {
    this.logNameObject.nativeElement.innerText = 'Logout';
  }
}
