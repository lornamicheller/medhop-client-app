import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseDiarrheaPage } from './choose-diarrhea.page';

describe('ChooseDiarrheaPage', () => {
  let component: ChooseDiarrheaPage;
  let fixture: ComponentFixture<ChooseDiarrheaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseDiarrheaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseDiarrheaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
