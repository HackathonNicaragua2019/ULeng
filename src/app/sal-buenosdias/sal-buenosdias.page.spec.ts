import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalBuenosdiasPage } from './sal-buenosdias.page';

describe('SalBuenosdiasPage', () => {
  let component: SalBuenosdiasPage;
  let fixture: ComponentFixture<SalBuenosdiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalBuenosdiasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalBuenosdiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
