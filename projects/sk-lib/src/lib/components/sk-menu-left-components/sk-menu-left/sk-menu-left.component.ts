import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuCategory} from 'sk-core';
import {Store} from '@ngxs/store';
import {Subscription} from 'rxjs';
import {SKConfigState} from 'sk-core';

@Component({
  selector: 'sk-menu-left',
  templateUrl: './sk-menu-left.component.html',
  styleUrls: ['./sk-menu-left.component.scss']
})
export class SkMenuLeftComponent implements OnInit, OnDestroy {

  menuCategories: MenuCategory[] = JSON.parse(JSON.stringify(this.store.selectSnapshot(SKConfigState.menuLeftItemsSelector)));
  subscription: Subscription = new Subscription();

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.subscription.add(this.store.select(SKConfigState.menuLeftItemsSelector)
      .subscribe(value => this.menuCategories = JSON.parse(JSON.stringify(value))));
  }

  hasLast(menuCategory: MenuCategory): boolean {
    return this.menuCategories.indexOf(menuCategory) === this.menuCategories.length - 1;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}


