import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColNegroPage } from './col-negro.page';

describe('ColNegroPage', () => {
  let component: ColNegroPage;
  let fixture: ComponentFixture<ColNegroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColNegroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColNegroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
