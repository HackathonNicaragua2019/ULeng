import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BebChichaPage } from './beb-chicha.page';

describe('BebChichaPage', () => {
  let component: BebChichaPage;
  let fixture: ComponentFixture<BebChichaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BebChichaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BebChichaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
