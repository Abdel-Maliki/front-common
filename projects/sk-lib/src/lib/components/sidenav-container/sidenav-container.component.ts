import {AfterViewInit, Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {hideMenuLeftAction, layoutSelectors, SKState} from 'sk-core';
import {MatDrawerMode, MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'sk-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.css']
})
export class SidenavContainerComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() toolBarRightContent: TemplateRef<any> | null = null;
  @Input() sidenavContent: TemplateRef<any> | null = null;
  mode$: Observable<MatDrawerMode> = this.store.pipe(select(layoutSelectors.drawerMode));
  displayMenuLeft$: Observable<boolean> = this.store.pipe(select(layoutSelectors.displayMenuLeft));
  hasXLarge: Observable<boolean> = this.store.pipe(select(layoutSelectors.hasXLarge));
  @ViewChild(MatSidenav) sidenav: MatSidenav | undefined;

  private subscribeClosedStart: Subscription | undefined;


  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  constructor(private store: Store<SKState>) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.toggleJob();
  }

  toggleJob(): void {
    this.subscribeClosedStart = this.sidenav?.closedStart?.subscribe(() => this.store.dispatch(hideMenuLeftAction()));
  }


  ngOnDestroy(): void {
    this.subscribeClosedStart?.unsubscribe();
  }
}

