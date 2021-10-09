import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkProfileListComponent } from './sk-profile-list.component';

describe('SkProfileListComponent', () => {
  let component: SkProfileListComponent;
  let fixture: ComponentFixture<SkProfileListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkProfileListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
