import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsPianoPage } from './ins-piano.page';

describe('InsPianoPage', () => {
  let component: InsPianoPage;
  let fixture: ComponentFixture<InsPianoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsPianoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsPianoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
