import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkMenuLeftComponent } from './sk-menu-left.component';

describe('MenuLeftComponent', () => {
  let component: SkMenuLeftComponent;
  let fixture: ComponentFixture<SkMenuLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkMenuLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkMenuLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
