import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BebPinolilloPage } from './beb-pinolillo.page';

describe('BebPinolilloPage', () => {
  let component: BebPinolilloPage;
  let fixture: ComponentFixture<BebPinolilloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BebPinolilloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BebPinolilloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
