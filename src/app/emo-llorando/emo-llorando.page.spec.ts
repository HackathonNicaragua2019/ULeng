import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoLlorandoPage } from './emo-llorando.page';

describe('EmoLlorandoPage', () => {
  let component: EmoLlorandoPage;
  let fixture: ComponentFixture<EmoLlorandoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmoLlorandoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmoLlorandoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
