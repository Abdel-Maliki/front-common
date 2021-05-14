import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';


@Component({
  selector: 'sk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sk-app';

  constructor(public store: Store) {
  }


  ngOnInit(): void {
  }
}

