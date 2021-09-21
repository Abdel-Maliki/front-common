import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkEnterpriseFormPageComponent } from './sk-enterprise-form-page.component';

describe('SkEnterpriseFormPageComponent', () => {
  let component: SkEnterpriseFormPageComponent;
  let fixture: ComponentFixture<SkEnterpriseFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkEnterpriseFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkEnterpriseFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
