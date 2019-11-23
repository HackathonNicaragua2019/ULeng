import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BebChiaPage } from './beb-chia.page';

describe('BebChiaPage', () => {
  let component: BebChiaPage;
  let fixture: ComponentFixture<BebChiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BebChiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BebChiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
