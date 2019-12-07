import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamAbuelaPage } from './fam-abuela.page';

describe('FamAbuelaPage', () => {
  let component: FamAbuelaPage;
  let fixture: ComponentFixture<FamAbuelaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamAbuelaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamAbuelaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
