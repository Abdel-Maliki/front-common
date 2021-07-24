import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkEnterpriseFormComponent } from './sk-enterprise-form.component';

describe('SkEnterpriseFormComponent', () => {
  let component: SkEnterpriseFormComponent;
  let fixture: ComponentFixture<SkEnterpriseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkEnterpriseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkEnterpriseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
