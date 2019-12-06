import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoCansadoPage } from './emo-cansado.page';

describe('EmoCansadoPage', () => {
  let component: EmoCansadoPage;
  let fixture: ComponentFixture<EmoCansadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmoCansadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmoCansadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
