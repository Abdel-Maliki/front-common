import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {MenuItem} from '../sk-menu-left/type';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SkMenuLeftCategoryComponent} from '../sk-menu-left-category/sk-menu-left-category.component';
import {Store} from '@ngxs/store';
import {SkLayoutState} from 'sk-core';

@Component({
  selector: 'sk-menu-left-item',
  templateUrl: './sk-menu-left-item.component.html',
  styleUrls: ['./sk-menu-left-item.component.scss'],
  animations: [
    trigger('submenu', [
      state('hidden', style({
        height: '0',
        overflow: 'hidden',
        opacity: 0,
      })),
      state('visible', style({
        height: '*',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
    ]),
  ]
})
export class SkMenuLeftItemComponent implements OnInit, OnDestroy {

  @Input() menuItem: MenuItem | undefined;
  @Input() level = 0;
  @Output() closeBrother: EventEmitter<MenuItem> = new EventEmitter<MenuItem>();
  @Output() currentMenuItemEvent: EventEmitter<MenuItem[]> = new EventEmitter<MenuItem[]>();
  @Input() parents: MenuItem[] = [];
  isLeave = false;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  updateShow(): void {
    if (this.menuItem) {
      this.menuItem.selected = !this.menuItem.selected;
      if (this.menuItem.selected) {
        const item = this.emptyChild(this.menuItem);
        this.currentMenuItemEvent.emit(Object.assign([], item ? [item, ...this.parents] : this.parents));
        this.closeBrother.emit(this.menuItem);
      }
    }
  }

  withChild(menuItem: MenuItem | undefined): boolean {
    return !!menuItem && !!menuItem.menuItems && menuItem.menuItems.length > 0;
  }

  closeOtherChildren(menuItem2: MenuItem | undefined): void {
    if (!this.menuItem || !this.menuItem.menuItems || !menuItem2) {
      return;
    }

    const autoClose: boolean = this.store.selectSnapshot<boolean>(SkLayoutState.autoCloseBrotherSelector);
    this.menuItem.menuItems = SkMenuLeftCategoryComponent.closeOtherChildren(this.menuItem.menuItems, menuItem2, autoClose);
  }

  hasFontAwesomeIcon(): boolean {
    return !!this.menuItem && !!this.menuItem.icon && this.menuItem.icon.startsWith('fa ');
  }

  hasPrimeNgIcon(): boolean {
    return !!this.menuItem && !!this.menuItem.icon && this.menuItem.icon.startsWith('pi ');
  }

  haseMaterialIcon(): boolean {
    return !this.hasPrimeNgIcon() && !this.hasFontAwesomeIcon();
  }

  ngOnDestroy(): void {
  }

  getChildParents(): MenuItem[] {
    const item = this.emptyChild(this.menuItem);
    return item ? [item, ...this.parents] : this.parents;
  }

  emptyChild(menuItem: MenuItem | undefined): MenuItem | undefined {
    const item = Object.assign({}, menuItem);
    if (item) {
      item.menuItems = [];
      return item;
    }
    return undefined;
  }

  selectedClass(): string {
    return this.menuItem && (this.isLeave || this.menuItem.selected) ? ' sk-menu-selected' : ' default-color';
  }
}
