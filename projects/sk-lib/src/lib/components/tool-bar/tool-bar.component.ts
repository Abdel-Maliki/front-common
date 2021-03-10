import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {sidenavToggleAction, layoutSelectors, SKState} from 'sk-core';

@Component({
  selector: 'sk-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
  @Input() color: ThemePalette = 'primary';
  @Input() templateRef: TemplateRef<any> | null = null;
  displayToolbar$: Observable<any> = this.store.pipe(select(layoutSelectors.displayToolbar));
  displayMenuButton$: Observable<any> = this.store.pipe(select(layoutSelectors.displayMenuButton));

  constructor(public store: Store<SKState>) {
  }

  ngOnInit(): void {
  }

  toggleSidenav(): void {
    this.store.dispatch(sidenavToggleAction());
  }

}
