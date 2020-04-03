import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoBaloncestoPage } from './depo-baloncesto.page';

describe('DepoBaloncestoPage', () => {
  let component: DepoBaloncestoPage;
  let fixture: ComponentFixture<DepoBaloncestoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepoBaloncestoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepoBaloncestoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
