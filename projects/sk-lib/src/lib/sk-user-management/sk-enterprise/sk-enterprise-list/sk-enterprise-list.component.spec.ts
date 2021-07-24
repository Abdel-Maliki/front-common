import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkEnterpriseListComponent } from './sk-enterprise-list.component';

describe('SkEnterpriseListComponent', () => {
  let component: SkEnterpriseListComponent;
  let fixture: ComponentFixture<SkEnterpriseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkEnterpriseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkEnterpriseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
