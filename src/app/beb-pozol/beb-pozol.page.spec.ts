import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BebPozolPage } from './beb-pozol.page';

describe('BebPozolPage', () => {
  let component: BebPozolPage;
  let fixture: ComponentFixture<BebPozolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BebPozolPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BebPozolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
