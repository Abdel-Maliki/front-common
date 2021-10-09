import {Component, Inject, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {SK_ENTERPRISE_SERVICE} from '../../../../classes';
import {SkEnterpriseService} from '../../services/sk-enterprise.service';

@Component({
  selector: 'sk-enterprise-list-page',
  templateUrl: './sk-enterprise-list-page.component.html',
  styleUrls: ['./sk-enterprise-list-page.component.css']
})
export class SkEnterpriseListPageComponent implements OnInit {

  constructor(@Inject(SK_ENTERPRISE_SERVICE) protected service: SkEnterpriseService, protected store: Store) {
  }

  ngOnInit(): void {
  }

}
