import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFinancesComponent } from './add-finances.component';

describe('AddFinancesComponent', () => {
  let component: AddFinancesComponent;
  let fixture: ComponentFixture<AddFinancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFinancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFinancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
