import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../login/user.model';
import { SignupService } from './signup.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  constructor(
    private signupService: SignupService,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  createUser(): void {
    if (this.form.valid) {
      this.signupService.createUser(this.form.value).subscribe(() => {
        this.authService.showMessage('Usuário criado com sucesso!');
        this.router.navigate(['/login']);
      });
    } else {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsDirty();
      })
    }
  }

  cancel(): void {
    this.router.navigate(['/login']);
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
