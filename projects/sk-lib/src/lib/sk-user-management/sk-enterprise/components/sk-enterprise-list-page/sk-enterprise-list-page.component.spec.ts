import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkEnterpriseListPageComponent } from './sk-enterprise-list-page.component';

describe('SkEnterpriseListPageComponent', () => {
  let component: SkEnterpriseListPageComponent;
  let fixture: ComponentFixture<SkEnterpriseListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkEnterpriseListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkEnterpriseListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
