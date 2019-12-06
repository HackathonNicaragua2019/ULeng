import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoConfundidoPage } from './emo-confundido.page';

describe('EmoConfundidoPage', () => {
  let component: EmoConfundidoPage;
  let fixture: ComponentFixture<EmoConfundidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmoConfundidoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmoConfundidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
