import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkUserListPageComponent } from './sk-user-list-page.component';

describe('SkUserListPageComponent', () => {
  let component: SkUserListPageComponent;
  let fixture: ComponentFixture<SkUserListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkUserListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkUserListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
