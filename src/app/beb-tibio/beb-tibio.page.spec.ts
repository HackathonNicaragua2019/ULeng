import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BebTibioPage } from './beb-tibio.page';

describe('BebTibioPage', () => {
  let component: BebTibioPage;
  let fixture: ComponentFixture<BebTibioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BebTibioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BebTibioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
