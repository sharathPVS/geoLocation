import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { adminApprove } from './admin-approve.page';

describe('SimDataPage', () => {
  let component: adminApprove;
  let fixture: ComponentFixture<adminApprove>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ adminApprove ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(adminApprove);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
