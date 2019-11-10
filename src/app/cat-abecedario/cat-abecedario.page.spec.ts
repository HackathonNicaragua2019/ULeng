import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatAbecedarioPage } from './cat-abecedario.page';

describe('CatAbecedarioPage', () => {
  let component: CatAbecedarioPage;
  let fixture: ComponentFixture<CatAbecedarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatAbecedarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatAbecedarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
