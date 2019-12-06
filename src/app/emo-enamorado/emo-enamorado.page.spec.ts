import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoEnamoradoPage } from './emo-enamorado.page';

describe('EmoEnamoradoPage', () => {
  let component: EmoEnamoradoPage;
  let fixture: ComponentFixture<EmoEnamoradoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmoEnamoradoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmoEnamoradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
