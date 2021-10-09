import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {SkUserDomain} from '../../classes/sk-user-domain';
import {SKUserModelState, SKUserPageAction, SKSetCurrentUserAction} from '../../services/sk-user-state';
import {ColumnItem} from '../../../../components';
import {DateHelpers} from '../../../../utils';
import {Store} from '@ngxs/store';
import {ActivatedRoute, Router} from '@angular/router';
import {SKIPagination, SKConfigState} from 'sk-core';

@Component({
  selector: 'sk-user-list',
  templateUrl: './sk-user-list.component.html',
  styleUrls: ['./sk-user-list.component.css']
})
export class SkUserListComponent  implements OnInit, OnDestroy {

  subscriptionList: Subscription = new Subscription();
  datasource: MatTableDataSource<SkUserDomain> = new MatTableDataSource<SkUserDomain>([]);
  pagination: SKIPagination = this.store.selectSnapshot(SKUserModelState.paginationSelector)
    || this.store.selectSnapshot(SKConfigState.selector).pagination;

  @Input() displayedColumns: ColumnItem<SkUserDomain>[] = [
    {title: 'Nom & Prenom', value: data => data?.name ?? ''},
    {title: 'Nom d\'utilisateur', value: data => data?.userName ?? ''},
    {title: 'Email', value: data => data?.email ?? ''},
    {title: 'Profile', value: data => data?.profile?.name ?? ''},
    {title: 'Status', value: data => data?.status ?? ''},
    {title: 'Date d\'Ajout', value: data => DateHelpers.dateToDDMMYYYY(data?.createdAt) ?? ''},
  ];

  constructor(protected store: Store, protected router: Router, protected activatedRoute: ActivatedRoute) {
    this.subscriptionList.add(this.store.select(SKUserModelState.entitiesSelector).subscribe(value => this.datasource.data = value));
  }

  goToUpdate(entity: SkUserDomain): void {
    this.store
      .dispatch(new SKSetCurrentUserAction(entity))
      .toPromise()
      .then(() => this.router.navigate(['update', `${entity.id}`], {relativeTo: this.activatedRoute}).then());
  }

  ngOnInit(): void {
  }

  pageChange(pagination: SKIPagination): void {
    this.store.dispatch(new SKUserPageAction({pagination}));
  }

  ngOnDestroy(): void {
    this.subscriptionList.unsubscribe();
  }
}
