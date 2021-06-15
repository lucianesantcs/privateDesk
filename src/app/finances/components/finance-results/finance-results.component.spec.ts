import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceResultsComponent } from './finance-results.component';

describe('FinanceResultsComponent', () => {
  let component: FinanceResultsComponent;
  let fixture: ComponentFixture<FinanceResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
