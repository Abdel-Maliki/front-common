import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkUserFormComponent } from './sk-user-form.component';

describe('SkUserFormComponent', () => {
  let component: SkUserFormComponent;
  let fixture: ComponentFixture<SkUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkUserFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
