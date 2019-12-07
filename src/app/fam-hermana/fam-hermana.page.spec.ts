import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamHermanaPage } from './fam-hermana.page';

describe('FamHermanaPage', () => {
  let component: FamHermanaPage;
  let fixture: ComponentFixture<FamHermanaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamHermanaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamHermanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
