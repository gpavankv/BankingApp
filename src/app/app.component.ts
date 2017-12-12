import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'First Angular App';
  btnValue = true;
  classBtnValue = '';
  clickEventValue = true;

  buttonToggle() {
    if (this.btnValue === true) {
      this.classBtnValue = 'btn btn-primary';
      this.btnValue  = false;
      console.log('prim');
    } else {
      this.classBtnValue = 'btn btn-danger';
      this.btnValue = true;
      console.log('dang');
    }
  }

  clickEvent() {
    if (this.clickEventValue === true) {
      document.getElementById('eventBind').innerHTML = 'This is a response based on click event!';
      this.clickEventValue = false;
    } else {
      document.getElementById('eventBind').innerHTML = '';
      this.clickEventValue = true;
    }
  }

  ngOnInit() {
    setInterval(() => {
      this.buttonToggle(); }, 2000);
  }
}

