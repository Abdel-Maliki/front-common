import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {Observable} from 'rxjs';
import {Select, Store} from '@ngxs/store';
import {SidenavToggleAction, SkLayoutState} from 'sk-core';

@Component({
  selector: 'sk-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
  @Input() color: ThemePalette = 'primary';
  @Input() templateRef: TemplateRef<any> | null = null;
  @Select(SkLayoutState.displayToolbarSelector) displayToolbar$: Observable<any> | undefined;
  @Select(SkLayoutState.displayMenuButtonSelector) displayMenuButton$: Observable<any> | undefined;

  constructor(public store: Store) {
  }

  ngOnInit(): void {
  }

  toggleSidenav(): void {
    this.store.dispatch(new SidenavToggleAction());
  }

}
