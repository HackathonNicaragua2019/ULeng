import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoFelizPage } from './emo-feliz.page';

describe('EmoFelizPage', () => {
  let component: EmoFelizPage;
  let fixture: ComponentFixture<EmoFelizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmoFelizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmoFelizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
