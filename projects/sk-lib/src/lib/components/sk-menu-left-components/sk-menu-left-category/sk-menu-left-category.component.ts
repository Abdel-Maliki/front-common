import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {SkLayoutState, CurrentMenuLeftItem, MenuCategory, MenuItem} from 'sk-core';

@Component({
  selector: 'sk-menu-left-category',
  templateUrl: './sk-menu-left-category.component.html',
  styleUrls: ['./sk-menu-left-category.component.scss'],
})
export class SkMenuLeftCategoryComponent implements OnInit, OnDestroy {

  @Input() menuCategory: MenuCategory | undefined;
  @Input() displayDivider = false;

  constructor(private store: Store) {
  }

  public static closeOtherChildren(menuItems: MenuItem[], menuItem: MenuItem, autoCloseBrother: boolean): MenuItem[] {
    return autoCloseBrother
      ? menuItems.map(value => value === menuItem ? value : SkMenuLeftCategoryComponent.setDisplay(value))
      : menuItems;
  }

  private static setDisplay(menuItem: MenuItem): MenuItem {
    menuItem.selected = false;
    return menuItem;
  }

  ngOnInit(): void {
  }

  dispatchCurrentMenu(menuItems: MenuItem[]): void {
    this.store.dispatch(new CurrentMenuLeftItem([...menuItems]));
  }

  checkAndCloseOtherChildren(menuItem: MenuItem): void {
    if (!this.menuCategory || !this.menuCategory.menuItems) {
      return;
    }
    const autoClose: boolean = this.store.selectSnapshot<boolean>(SkLayoutState.autoCloseBrotherSelector);
    this.menuCategory.menuItems = SkMenuLeftCategoryComponent.closeOtherChildren(this.menuCategory.menuItems, menuItem, autoClose);
  }

  ngOnDestroy(): void {
  }
}
