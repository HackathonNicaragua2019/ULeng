import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepGranadaPage } from './dep-granada.page';

describe('DepGranadaPage', () => {
  let component: DepGranadaPage;
  let fixture: ComponentFixture<DepGranadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepGranadaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepGranadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
