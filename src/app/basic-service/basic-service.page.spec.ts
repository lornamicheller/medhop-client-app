import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicServicePage } from './basic-service.page';

describe('BasicServicePage', () => {
  let component: BasicServicePage;
  let fixture: ComponentFixture<BasicServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicServicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
