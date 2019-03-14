import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimDataPage } from './sim-data.page';

describe('SimDataPage', () => {
  let component: SimDataPage;
  let fixture: ComponentFixture<SimDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimDataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
