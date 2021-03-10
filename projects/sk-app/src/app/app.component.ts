import {Component, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'sk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sk-app';

  constructor() {
  }


  ngOnInit(): void {
  }
}

