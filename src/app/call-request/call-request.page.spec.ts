import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallRequestPage } from './call-request.page';

describe('CallRequestPage', () => {
  let component: CallRequestPage;
  let fixture: ComponentFixture<CallRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallRequestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
