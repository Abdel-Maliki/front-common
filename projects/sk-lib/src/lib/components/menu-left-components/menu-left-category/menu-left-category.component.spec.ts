import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLeftCategoryComponent } from './menu-left-category.component';

describe('MenuLeftCategoryComponent', () => {
  let component: MenuLeftCategoryComponent;
  let fixture: ComponentFixture<MenuLeftCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLeftCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLeftCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
