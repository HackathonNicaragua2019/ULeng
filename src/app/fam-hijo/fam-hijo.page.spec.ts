import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamHijoPage } from './fam-hijo.page';

describe('FamHijoPage', () => {
  let component: FamHijoPage;
  let fixture: ComponentFixture<FamHijoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamHijoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamHijoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
