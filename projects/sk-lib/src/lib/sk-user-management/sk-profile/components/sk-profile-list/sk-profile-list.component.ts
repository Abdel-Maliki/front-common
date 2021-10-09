import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {SKProfileModelState, SKProfilePageAction, SKSetCurrentProfileAction} from '../../services/sk-profile-state';
import {ColumnItem} from '../../../../components';
import {DateHelpers} from '../../../../utils';
import {Store} from '@ngxs/store';
import {ActivatedRoute, Router} from '@angular/router';
import {SkProfileDomain} from '../../classes/sk-profile-domain';
import {SKIPagination, SKConfigState} from 'sk-core';

@Component({
  selector: 'sk-profile-list',
  templateUrl: './sk-profile-list.component.html',
  styleUrls: ['./sk-profile-list.component.css']
})
export class SkProfileListComponent implements OnInit, OnDestroy {

  subscriptionList: Subscription = new Subscription();
  datasource: MatTableDataSource<SkProfileDomain> = new MatTableDataSource<SkProfileDomain>([]);
  pagination: SKIPagination = this.store.selectSnapshot(SKProfileModelState.paginationSelector)
    || this.store.selectSnapshot(SKConfigState.selector).pagination;

  @Input() displayedColumns: ColumnItem<SkProfileDomain>[] = [
    {title: 'ID', value: data => data?.id ?? ''},
    {title: 'Nom', value: data => data?.name ?? ''},
    {title: 'Description', value: data => data?.createdAt ?? ''},
    {title: 'Date d\'Ajout', value: data => DateHelpers.dateToDDMMYYYY(data?.createdAt) ?? ''},
  ];

  constructor(protected store: Store, protected router: Router, protected activatedRoute: ActivatedRoute) {
    this.subscriptionList.add(this.store.select(SKProfileModelState.entitiesSelector).subscribe(value => this.datasource.data = value));
  }

  goToUpdate(entity: SkProfileDomain): void {
    this.store
      .dispatch(new SKSetCurrentProfileAction(entity))
      .toPromise()
      .then(() => this.router.navigate(['update', `${entity.id}`], {relativeTo: this.activatedRoute}).then());
  }

  ngOnInit(): void {
  }

  pageChange(pagination: SKIPagination): void {
    this.store.dispatch(new SKProfilePageAction({pagination}));
  }

  ngOnDestroy(): void {
    this.subscriptionList.unsubscribe();
  }
}
