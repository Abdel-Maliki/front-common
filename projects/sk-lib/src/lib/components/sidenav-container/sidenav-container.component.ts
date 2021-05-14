import {AfterViewInit, Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {MatDrawerMode, MatSidenav} from '@angular/material/sidenav';
import {Select, Store} from '@ngxs/store';
import {HideMenuLeftAction, SkLayoutState} from 'sk-core';

@Component({
  selector: 'sk-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.css']
})
export class SidenavContainerComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() toolBarRightContent: TemplateRef<any> | null = null;
  @Input() sidenavContent: TemplateRef<any> | null = null;
  @Select(SkLayoutState.drawerModeSelector) mode$: Observable<MatDrawerMode> | undefined;
  @Select(SkLayoutState.displayMenuLeftSelector) displayMenuLeft$: Observable<boolean> | undefined;
  @Select(SkLayoutState.hasXLargeSelector) hasXLarge: Observable<boolean> | undefined;
  @ViewChild(MatSidenav) sidenav: MatSidenav | undefined;
  mode: MatDrawerMode = 'side';

  private subscribeClosedStart: Subscription | undefined;
  private subscribeMode: Subscription | undefined;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.toggleJob();
  }

  toggleJob(): void {
    this.subscribeClosedStart = this.sidenav?.closedStart?.subscribe(() => this.store.dispatch(new HideMenuLeftAction()));
    this.subscribeMode = this.mode$?.subscribe(value => this.mode = value ? value : 'side');
  }

  ngOnDestroy(): void {
    this.subscribeClosedStart?.unsubscribe();
    this.subscribeMode?.unsubscribe();
  }
}

