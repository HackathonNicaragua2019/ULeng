import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamAbueloPage } from './fam-abuelo.page';

describe('FamAbueloPage', () => {
  let component: FamAbueloPage;
  let fixture: ComponentFixture<FamAbueloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamAbueloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamAbueloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
