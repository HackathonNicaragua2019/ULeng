import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepMasayaPage } from './dep-masaya.page';

describe('DepMasayaPage', () => {
  let component: DepMasayaPage;
  let fixture: ComponentFixture<DepMasayaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepMasayaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepMasayaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
