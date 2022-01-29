import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SkEnterpriseDomain} from '../../classes/sk-enterprise-domain';
import {ColumnItem} from '../../../../components';
import {
  SKEnterpriseModelState,
  SKEnterpriseModelStateModel,
  SKEnterprisePageAction,
  SKSetCurrentEnterpriseAction
} from '../../services/sk-enterprise-state';
import {Subscription} from 'rxjs';
import {SKConfigState, SKIPagination} from '@sk-framework/sk-core';
import {DateHelpers} from '../../../../utils';
import {SkComponentsData} from '../../../../services';
import {SkAbstractListComponent} from '../../../../abstract';
import {ActivatedRoute, Router} from '@angular/router';
import {SkAbstractFormAction} from '../../../../abstract/sk-abstract-component';

@Component({
  selector: 'sk-enterprise-list',
  templateUrl: './sk-enterprise-list.component.html',
  styleUrls: ['./sk-enterprise-list.component.css'],

})
export class SkEnterpriseListComponent extends SkAbstractListComponent<SkEnterpriseDomain, SKEnterpriseModelStateModel>
  implements OnInit, OnDestroy {

  subscriptionList: Subscription = new Subscription();
  datasource: MatTableDataSource<SkEnterpriseDomain> = new MatTableDataSource<SkEnterpriseDomain>([]);
  pagination: SKIPagination = this.data.store.selectSnapshot(SKEnterpriseModelState.paginationSelector)
    || this.data.store.selectSnapshot(SKConfigState.selector).pagination;

  @Input() displayedColumns: ColumnItem<SkEnterpriseDomain>[] = [
    {title: 'Nom', value: data => data?.name ?? ''},
    {title: 'Téléphone', value: data => data?.tel ?? ''},
    {title: 'Adresse', value: data => data?.address ?? ''},
    {title: 'Email', value: data => data?.email ?? ''},
    {title: 'Date d\'Ajout', value: data => DateHelpers.dateToDDMMYYYY(data?.createdAt) ?? ''},
  ];

  constructor(data: SkComponentsData,
              protected router: Router,
              protected activatedRoute: ActivatedRoute) {
    super(data, router, activatedRoute);

    this.subscriptionList
      .add(this.data.store.select(SKEnterpriseModelState.entitiesSelector).subscribe(value => this.datasource.data = value));
  }

  goToUpdate(entity: SkEnterpriseDomain): void {
    this.data.store
      .dispatch(new SKSetCurrentEnterpriseAction(entity))
      .toPromise()
      .then(() => this.router.navigate(['update', `${entity.id}`], {relativeTo: this.activatedRoute}).then());
  }

  ngOnInit(): void {
  }

  pageChange(pagination: SKIPagination): void {
    this.data.store.dispatch(new SKEnterprisePageAction({pagination}));
  }

  ngOnDestroy(): void {
    this.subscriptionList.unsubscribe();
  }

  get actions(): SkAbstractFormAction<SkEnterpriseDomain, any> {
    return {};
  }

  state(): SKEnterpriseModelStateModel {
    return this.data.store.selectSnapshot(SKEnterpriseModelState.selector);
  }
}
