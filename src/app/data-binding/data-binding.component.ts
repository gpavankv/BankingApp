import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
@Input() a_title: string;
@Output() sendTitle: EventEmitter<any> = new EventEmitter<any>();
c_title = '';

constructor() {
}
  btnValue = true;
  classBtnValue = '';
  clickEventValue = true;

  emitTitle() {
    this.sendTitle.emit(this.c_title);
  }

  buttonToggle() {
    if (this.btnValue === true) {
      this.classBtnValue = 'btn btn-primary';
      this.btnValue  = !this.btnValue;
      console.log('prim');
    } else {
      this.classBtnValue = 'btn btn-danger';
      this.btnValue = !this.btnValue;
      console.log('dang');
    }
  }

  clickEvent() {
    if (this.clickEventValue === true) {
      document.getElementById('eventBind').innerHTML = 'This is a response based on click event!';
      this.clickEventValue = !this.clickEventValue;
    } else {
      document.getElementById('eventBind').innerHTML = '';
      this.clickEventValue = !this.clickEventValue;
    }
  }

  inputEvent() {
    console.log('printing changed c_title value on change from child component, value is \'' + this.c_title + '\'');
  }

  ngOnInit() {
    setInterval(() => {
      this.buttonToggle(); }, 2000);
  }

}
