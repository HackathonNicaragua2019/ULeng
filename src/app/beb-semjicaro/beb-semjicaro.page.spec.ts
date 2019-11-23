import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BebSemjicaroPage } from './beb-semjicaro.page';

describe('BebSemjicaroPage', () => {
  let component: BebSemjicaroPage;
  let fixture: ComponentFixture<BebSemjicaroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BebSemjicaroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BebSemjicaroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
