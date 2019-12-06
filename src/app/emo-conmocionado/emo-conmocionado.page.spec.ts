import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoConmocionadoPage } from './emo-conmocionado.page';

describe('EmoConmocionadoPage', () => {
  let component: EmoConmocionadoPage;
  let fixture: ComponentFixture<EmoConmocionadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmoConmocionadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmoConmocionadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
