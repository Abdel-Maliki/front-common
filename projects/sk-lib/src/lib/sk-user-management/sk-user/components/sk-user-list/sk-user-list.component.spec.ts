import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkUserListComponent } from './sk-user-list.component';

describe('SkUserListComponent', () => {
  let component: SkUserListComponent;
  let fixture: ComponentFixture<SkUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
