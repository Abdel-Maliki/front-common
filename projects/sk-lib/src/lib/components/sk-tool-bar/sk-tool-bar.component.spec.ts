import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkToolBarComponent } from './sk-tool-bar.component';

describe('ToolBarComponent', () => {
  let component: SkToolBarComponent;
  let fixture: ComponentFixture<SkToolBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkToolBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
