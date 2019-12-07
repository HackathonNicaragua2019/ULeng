import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColAmarilloPage } from './col-amarillo.page';

describe('ColAmarilloPage', () => {
  let component: ColAmarilloPage;
  let fixture: ComponentFixture<ColAmarilloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColAmarilloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColAmarilloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
