import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColRosadoPage } from './col-rosado.page';

describe('ColRosadoPage', () => {
  let component: ColRosadoPage;
  let fixture: ComponentFixture<ColRosadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColRosadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColRosadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
