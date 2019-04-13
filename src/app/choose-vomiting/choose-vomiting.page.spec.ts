import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseVomitingPage } from './choose-vomiting.page';

describe('ChooseVomitingPage', () => {
  let component: ChooseVomitingPage;
  let fixture: ComponentFixture<ChooseVomitingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseVomitingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseVomitingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
