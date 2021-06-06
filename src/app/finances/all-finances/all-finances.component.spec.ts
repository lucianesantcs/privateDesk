import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFinancesComponent } from './all-finances.component';

describe('AllFinancesComponent', () => {
  let component: AllFinancesComponent;
  let fixture: ComponentFixture<AllFinancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFinancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFinancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
