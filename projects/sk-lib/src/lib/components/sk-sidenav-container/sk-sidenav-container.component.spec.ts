import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkSidenavContainerComponent } from './sk-sidenav-container.component';

describe('SidenavContainerComponent', () => {
  let component: SkSidenavContainerComponent;
  let fixture: ComponentFixture<SkSidenavContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkSidenavContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkSidenavContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
