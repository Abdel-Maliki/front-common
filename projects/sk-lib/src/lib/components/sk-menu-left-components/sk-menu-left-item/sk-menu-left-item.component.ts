import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SkMenuLeftCategoryComponent} from '../sk-menu-left-category/sk-menu-left-category.component';
import {Store} from '@ngxs/store';
import {SkLayoutState, MenuItem} from 'sk-core';
import {Router, IsActiveMatchOptions} from '@angular/router';


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

  @Input() menuItem: SkLikMenuItem = {title: ''};
  @Input() level = 0;
  @Input() parentPath = '';
  @Output() closeBrother: EventEmitter<MenuItem> = new EventEmitter<MenuItem>();
  @Output() currentMenuItemEvent: EventEmitter<MenuItem[]> = new EventEmitter<MenuItem[]>();
  @Input() parents: MenuItem[] = [];
  displayChildren = false;
  autoSelected = true;
  isLeave = false;

  constructor(private store: Store, private router: Router) {
  }


  ngOnInit(): void {
    this.buildAbsolutePath();
  }

  buildAbsolutePath(): void {
    this.menuItem.absolutePath = this.parentPath && this.parentPath.length > 0
      ? `${this.parentPath}/${this.menuItem?.link ?? ''}`
      : this.menuItem?.link ?? '';
  }

  updateShow(): void {
    this.autoSelected = false;
    this.displayChildren = !this.displayChildren;
    if (this.displayChildren) {
      this.closeBrother.emit(this.menuItem);
    }

    if (this.menuItem.absolutePath && (!this.menuItem.menuItems || this.menuItem.menuItems.length === 0)) {
      this.router.navigateByUrl(this.menuItem.absolutePath).then();
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
    return this.isLeave || this.isActive() ? ' sk-menu-selected' : ' default-color';
  }

  isActive(): boolean {
    const val = this.router.isActive(this.menuItem.absolutePath ?? '', subsetMatchOptions);
    if (this.autoSelected) {
      this.displayChildren = val;
    }
    return val;
  }
}

export const subsetMatchOptions: IsActiveMatchOptions = {
  paths: 'subset',
  fragment: 'ignored',
  matrixParams: 'ignored',
  queryParams: 'subset'
};

export interface SkLikMenuItem extends MenuItem {
  absolutePath?: string;
}
