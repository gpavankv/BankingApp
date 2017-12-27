import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'First Angular App';

  getTitle(data: any) {
    console.log(data);
    this.title = data;
  }

  ngOnInit() {
    this.title = 'Another Angular App!';
  }
}

