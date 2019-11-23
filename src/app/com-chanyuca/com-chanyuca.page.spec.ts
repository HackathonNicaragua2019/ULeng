import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComChanyucaPage } from './com-chanyuca.page';

describe('ComChanyucaPage', () => {
  let component: ComChanyucaPage;
  let fixture: ComponentFixture<ComChanyucaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComChanyucaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComChanyucaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
