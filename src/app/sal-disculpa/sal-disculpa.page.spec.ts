import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalDisculpaPage } from './sal-disculpa.page';

describe('SalDisculpaPage', () => {
  let component: SalDisculpaPage;
  let fixture: ComponentFixture<SalDisculpaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalDisculpaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalDisculpaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
