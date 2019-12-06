import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoTristePage } from './emo-triste.page';

describe('EmoTristePage', () => {
  let component: EmoTristePage;
  let fixture: ComponentFixture<EmoTristePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmoTristePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmoTristePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
