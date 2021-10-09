import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkUserFormPageComponent } from './sk-user-form-page.component';

describe('SkUserFormPageComponent', () => {
  let component: SkUserFormPageComponent;
  let fixture: ComponentFixture<SkUserFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkUserFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkUserFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
