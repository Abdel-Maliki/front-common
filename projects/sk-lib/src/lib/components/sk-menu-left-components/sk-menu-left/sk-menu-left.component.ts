import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MenuCategory} from '@sk-framework/sk-core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'sk-menu-left',
  templateUrl: './sk-menu-left.component.html',
  styleUrls: ['./sk-menu-left.component.scss']
})
export class SkMenuLeftComponent implements OnInit, OnDestroy {

  @Input() menuCategories: MenuCategory[] = [];
  subscription: Subscription = new Subscription();

  ngOnInit(): void {
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


