import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SutureContinuePage } from './suture-continue.page';

describe('SutureContinuePage', () => {
  let component: SutureContinuePage;
  let fixture: ComponentFixture<SutureContinuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SutureContinuePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SutureContinuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
