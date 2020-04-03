import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsFlautaPage } from './ins-flauta.page';

describe('InsFlautaPage', () => {
  let component: InsFlautaPage;
  let fixture: ComponentFixture<InsFlautaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsFlautaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsFlautaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
