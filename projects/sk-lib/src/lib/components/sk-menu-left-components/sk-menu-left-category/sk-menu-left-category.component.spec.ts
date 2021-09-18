import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkMenuLeftCategoryComponent } from './sk-menu-left-category.component';

describe('MenuLeftCategoryComponent', () => {
  let component: SkMenuLeftCategoryComponent;
  let fixture: ComponentFixture<SkMenuLeftCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkMenuLeftCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkMenuLeftCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
