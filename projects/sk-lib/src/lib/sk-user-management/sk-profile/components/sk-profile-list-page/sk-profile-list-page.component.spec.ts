import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkProfileListPageComponent } from './sk-profile-list-page.component';

describe('SkProfileListPageComponent', () => {
  let component: SkProfileListPageComponent;
  let fixture: ComponentFixture<SkProfileListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkProfileListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkProfileListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
