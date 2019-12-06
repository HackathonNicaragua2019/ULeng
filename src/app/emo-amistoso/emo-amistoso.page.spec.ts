import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoAmistosoPage } from './emo-amistoso.page';

describe('EmoAmistosoPage', () => {
  let component: EmoAmistosoPage;
  let fixture: ComponentFixture<EmoAmistosoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmoAmistosoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmoAmistosoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
