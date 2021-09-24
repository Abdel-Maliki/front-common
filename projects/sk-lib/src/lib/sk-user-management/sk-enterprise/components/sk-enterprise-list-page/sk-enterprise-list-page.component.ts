import {Component, OnInit} from '@angular/core';
import {SKConfigState} from 'sk-core';
import {Store} from '@ngxs/store';

@Component({
  selector: 'sk-sk-enterprise-list-page',
  templateUrl: './sk-enterprise-list-page.component.html',
  styleUrls: ['./sk-enterprise-list-page.component.css']
})
export class SkEnterpriseListPageComponent implements OnInit {

  enterpriseLink: string = this.store.selectSnapshot(SKConfigState.selector).links.enterpriseLink;

  constructor(protected store: Store) {
  }

  ngOnInit(): void {
  }

}
