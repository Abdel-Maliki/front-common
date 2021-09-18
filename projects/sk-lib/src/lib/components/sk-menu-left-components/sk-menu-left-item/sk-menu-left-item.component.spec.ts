import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkMenuLeftItemComponent } from './sk-menu-left-item.component';

describe('MenuLeftItemComponent', () => {
  let component: SkMenuLeftItemComponent;
  let fixture: ComponentFixture<SkMenuLeftItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkMenuLeftItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkMenuLeftItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
