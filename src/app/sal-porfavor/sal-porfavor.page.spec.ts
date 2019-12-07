import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalPorfavorPage } from './sal-porfavor.page';

describe('SalPorfavorPage', () => {
  let component: SalPorfavorPage;
  let fixture: ComponentFixture<SalPorfavorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalPorfavorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalPorfavorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
