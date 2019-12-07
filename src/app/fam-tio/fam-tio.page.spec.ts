import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamTioPage } from './fam-tio.page';

describe('FamTioPage', () => {
  let component: FamTioPage;
  let fixture: ComponentFixture<FamTioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamTioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamTioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
