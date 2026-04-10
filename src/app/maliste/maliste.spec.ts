import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maliste } from './maliste';

describe('Maliste', () => {
  let component: Maliste;
  let fixture: ComponentFixture<Maliste>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maliste],
    }).compileComponents();

    fixture = TestBed.createComponent(Maliste);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
