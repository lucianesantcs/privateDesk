import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancesHeaderComponent } from './finances-header.component';

describe('FinancesHeaderComponent', () => {
  let component: FinancesHeaderComponent;
  let fixture: ComponentFixture<FinancesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancesHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
