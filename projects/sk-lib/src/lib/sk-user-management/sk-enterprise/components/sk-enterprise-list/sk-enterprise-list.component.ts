import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SkEnterpriseModel} from '../../sk-enterprise-model';
import {ColumnItem} from '../../../../components';
import {Store} from '@ngxs/store';
import {SKEnterpriseModelState, SKEnterprisePageAction, SKSetCurrentEnterpriseAction} from '../../sk-enterprise-state';
import {Subscription} from 'rxjs';
import { SKConfigState, SKIPagination} from 'sk-core';
import {Router} from '@angular/router';
import {DateHelpers} from '../../../../utils';

@Component({
  selector: 'sk-enterprise-list',
  templateUrl: './sk-enterprise-list.component.html',
  styleUrls: ['./sk-enterprise-list.component.css']
})
export class SkEnterpriseListComponent implements OnInit, OnDestroy {

  subscriptionList: Subscription = new Subscription();
  datasource: MatTableDataSource<SkEnterpriseModel> = new MatTableDataSource<SkEnterpriseModel>([]);
  pagination: SKIPagination = this.store.selectSnapshot(SKEnterpriseModelState.paginationSelector)
    || this.store.selectSnapshot(SKConfigState.selector).pagination;
  enterpriseLink: string = this.store.selectSnapshot(SKConfigState.selector).links.enterpriseLink;

  @Input() displayedColumns: ColumnItem<SkEnterpriseModel>[] = [
    {title: 'ID', value: data => data?.id ?? ''},
    {title: 'Nom', value: data => data?.name ?? ''},
    {title: 'Téléphone', value: data => data?.tel ?? ''},
    {title: 'Adresse', value: data => data?.address ?? ''},
    {title: 'Email', value: data => data?.email ?? ''},
    {title: 'Date d\'Ajout', value: data => DateHelpers.dateToDDMMYYYY(data?.createdAt) ?? ''},
  ];

  constructor(protected store: Store, protected router: Router) {
    this.subscriptionList.add(this.store.select(SKEnterpriseModelState.entitiesSelector).subscribe(value => this.datasource.data = value));
  }

  goToUpdate(entity: SkEnterpriseModel): void {
    this.store
      .dispatch(new SKSetCurrentEnterpriseAction(entity))
      .toPromise()
      .then(() => this.router.navigate([`update/${entity.id}`]).then());
  }

  ngOnInit(): void {
  }

  pageChange(pagination: SKIPagination): void {
    this.store.dispatch(new SKEnterprisePageAction({pagination}));
  }

  ngOnDestroy(): void {
    this.subscriptionList.unsubscribe();
  }
}
