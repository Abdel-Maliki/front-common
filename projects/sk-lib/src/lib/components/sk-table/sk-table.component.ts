import {Component, EventEmitter, Input, OnDestroy, Output, TemplateRef} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {PageEvent} from '@angular/material/paginator';
import {Router} from '@angular/router';
import {SKConfigState, SKIPagination} from 'sk-core';
import {Store} from '@ngxs/store';
import {Subscription} from 'rxjs';

@Component({
  selector: 'sk-table',
  templateUrl: './sk-table.component.html',
  styleUrls: ['./sk-table.component.scss']
})
export class SkTableComponent implements OnDestroy {
  @Input() datasource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  @Input() totalElements: number | undefined;
  @Input() pageIndex: number | undefined;
  @Input() pageSize: number | undefined;
  @Input() pageSizeOptions: number[] = this.store.selectSnapshot(SKConfigState.pageSizeOptionsSelector);
  @Input() displayPagination = true;
  @Input() disabledRipple = false;
  @Input() displayedColumns: ColumnItem<any>[] = [];
  @Input() actionsTemplate: TemplateRef<any> | null = null;
  @Input() cursor: 'default' | 'pointer' = 'pointer';
  @Input() pagination: SKIPagination = this.store.selectSnapshot(SKConfigState.paginationSelector);

  @Output() pageChange: EventEmitter<SKIPagination> = new EventEmitter();
  @Output() lineClicked: EventEmitter<any> = new EventEmitter();

  private subscriptionList: Subscription = new Subscription();


  constructor(public router: Router, private store: Store) {
  }

  get columns(): string[] {
    return (this.displayedColumns?.map(value => value.title) ?? []).concat(this.actionsTemplate ? ['actions'] : []);
  }

  pageEvent(pageEvent: PageEvent): void {
    this.pageChange.emit(Object.assign(
      this.pagination,
      {page: pageEvent.pageIndex, size: pageEvent.pageSize}
    ));
  }

  ngOnDestroy(): void {
    this.subscriptionList.unsubscribe();
  }
}

export interface ColumnItem<T> {
  title: string;
  value: (data: T) => string;
}
