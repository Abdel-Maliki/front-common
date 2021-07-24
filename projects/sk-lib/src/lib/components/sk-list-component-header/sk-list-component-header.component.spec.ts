import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkListComponentHeaderComponent } from './sk-list-component-header.component';

describe('SkListComponentHeaderComponent', () => {
  let component: SkListComponentHeaderComponent;
  let fixture: ComponentFixture<SkListComponentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkListComponentHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkListComponentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
