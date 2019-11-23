import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BebPinolPage } from './beb-pinol.page';

describe('BebPinolPage', () => {
  let component: BebPinolPage;
  let fixture: ComponentFixture<BebPinolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BebPinolPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BebPinolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
