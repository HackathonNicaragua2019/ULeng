import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamPapaPage } from './fam-papa.page';

describe('FamPapaPage', () => {
  let component: FamPapaPage;
  let fixture: ComponentFixture<FamPapaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamPapaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamPapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
