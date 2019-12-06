import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoEnojadoPage } from './emo-enojado.page';

describe('EmoEnojadoPage', () => {
  let component: EmoEnojadoPage;
  let fixture: ComponentFixture<EmoEnojadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmoEnojadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmoEnojadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
