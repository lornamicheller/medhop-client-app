import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangoverKitPage } from './hangover-kit.page';

describe('HangoverKitPage', () => {
  let component: HangoverKitPage;
  let fixture: ComponentFixture<HangoverKitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangoverKitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangoverKitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
