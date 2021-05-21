import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLeftItemComponent } from './menu-left-item.component';

describe('MenuLeftItemComponent', () => {
  let component: MenuLeftItemComponent;
  let fixture: ComponentFixture<MenuLeftItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLeftItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLeftItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
