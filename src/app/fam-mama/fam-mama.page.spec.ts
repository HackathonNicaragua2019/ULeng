import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamMamaPage } from './fam-mama.page';

describe('FamMamaPage', () => {
  let component: FamMamaPage;
  let fixture: ComponentFixture<FamMamaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamMamaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamMamaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
