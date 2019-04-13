import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SutureNotePage } from './suture-note.page';

describe('SutureNotePage', () => {
  let component: SutureNotePage;
  let fixture: ComponentFixture<SutureNotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SutureNotePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SutureNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
