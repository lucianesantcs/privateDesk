import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateNotesComponent } from './private-notes.component';

describe('PrivateNotesComponent', () => {
  let component: PrivateNotesComponent;
  let fixture: ComponentFixture<PrivateNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
