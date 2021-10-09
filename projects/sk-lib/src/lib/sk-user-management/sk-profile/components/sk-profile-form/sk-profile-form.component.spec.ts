import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkProfileFormComponent } from './sk-profile-form.component';

describe('SkProfileFormComponent', () => {
  let component: SkProfileFormComponent;
  let fixture: ComponentFixture<SkProfileFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkProfileFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
