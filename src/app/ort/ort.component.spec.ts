import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrtComponent } from './ort.component';

describe('OrtComponent', () => {
  let component: OrtComponent;
  let fixture: ComponentFixture<OrtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
