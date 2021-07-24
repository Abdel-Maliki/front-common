import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkAddButtonComponent } from './sk-add-button.component';

describe('SkAddButtonComponent', () => {
  let component: SkAddButtonComponent;
  let fixture: ComponentFixture<SkAddButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkAddButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
