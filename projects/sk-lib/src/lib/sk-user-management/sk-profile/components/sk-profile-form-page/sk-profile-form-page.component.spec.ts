import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkProfileFormPageComponent } from './sk-profile-form-page.component';

describe('SkProfileFormPageComponent', () => {
  let component: SkProfileFormPageComponent;
  let fixture: ComponentFixture<SkProfileFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkProfileFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkProfileFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
