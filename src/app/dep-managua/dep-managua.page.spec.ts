import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepManaguaPage } from './dep-managua.page';

describe('DepManaguaPage', () => {
  let component: DepManaguaPage;
  let fixture: ComponentFixture<DepManaguaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepManaguaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepManaguaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
