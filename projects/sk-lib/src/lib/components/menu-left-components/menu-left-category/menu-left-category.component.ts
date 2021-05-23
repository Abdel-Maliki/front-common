import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MenuCategory, MenuItem} from '../menu-left/type';
import {Store} from '@ngxs/store';
import {SkLayoutState, CurrentMenuLeftItem} from 'sk-core';

@Component({
  selector: 'sk-menu-left-category',
  templateUrl: './menu-left-category.component.html',
  styleUrls: ['./menu-left-category.component.scss'],
})
export class MenuLeftCategoryComponent implements OnInit, OnDestroy {

  @Input() menuCategory: MenuCategory | undefined;
  @Input() displayDivider = false;

  constructor(private store: Store) {
  }

  public static closeOtherChildren(menuItems: MenuItem[], menuItem: MenuItem, autoCloseBrother: boolean): MenuItem[] {
    return autoCloseBrother ? menuItems.map(value => value === menuItem ? value : MenuLeftCategoryComponent.setDisplay(value)) : menuItems;
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
    this.menuCategory.menuItems = MenuLeftCategoryComponent.closeOtherChildren(this.menuCategory.menuItems, menuItem, autoClose);
  }

  ngOnDestroy(): void {
  }
}
