import {AfterViewInit, Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Select, Store} from '@ngxs/store';
import {MenuLeftState, SkLayoutState, SK_MENU_LEFT_DEFAULT_STATE, HideMenuLeftAction} from 'sk-core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'sk-sidenav-container',
  templateUrl: './sk-sidenav-container.component.html',
  styleUrls: ['./sk-sidenav-container.component.css']
})
export class SkSidenavContainerComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() toolBarRightContent: TemplateRef<any> | undefined;
  @Input() sidenavContent: TemplateRef<any> | undefined;
  @Select(SkLayoutState.menuLeftStateSelector) menuLeftState$: Observable<MenuLeftState> | undefined;
  @Select(SkLayoutState.hasXLargeSelector) hasXLarge: Observable<boolean> | undefined;
  menuLeftState: MenuLeftState = SK_MENU_LEFT_DEFAULT_STATE;
  @ViewChild(MatSidenav) sidenav: MatSidenav | undefined;
  private subscribeClosedStart: Subscription | undefined;
  private subscribeMode: Subscription | undefined;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.subscribeMode = this.menuLeftState$?.subscribe(value => this.menuLeftState = value);
  }

  ngAfterViewInit(): void {
    this.toggleJob();
  }

  toggleJob(): void {
    this.subscribeClosedStart = this.sidenav?.closedStart?.subscribe(() => this.store.dispatch(new HideMenuLeftAction()));
  }

  ngOnDestroy(): void {
    this.subscribeClosedStart?.unsubscribe();
    this.subscribeMode?.unsubscribe();
  }
}
