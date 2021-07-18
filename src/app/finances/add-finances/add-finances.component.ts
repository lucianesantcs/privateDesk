import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Finances } from '../finances.model';
import { FinancesService } from '../finances.service';

@Component({
  selector: 'app-add-finances',
  templateUrl: './add-finances.component.html',
  styleUrls: ['./add-finances.component.scss'],
})
export class AddFinancesComponent implements OnInit {
  form: FormGroup;

  createdAt = new Date().getTime().toString();

  constructor(
    private financesService: FinancesService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null],
      value: [null, Validators.required],
      date: this.createdAt,
    });
  }

  
  cancel(): void {
    this.router.navigate(['/finances/all-finances']);
  }

  createFinance() {
    if(this.form.valid) {
      this.financesService.createFinance(this.form.value).subscribe(() => {
        this.financesService.showMessage('Finança adicionada com sucesso!');
        this.router.navigate(['/finances/all-finances']);
      });
    } else {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsDirty();
      })
    }
  }

  checkValidTouched(field) {
    return !this.form.get(field).valid && (this.form.get(field).touched || this.form.get(field).dirty);
  }

  classError(field) {
    return {
      'has-error': this.checkValidTouched(field),
    };
  }
}
