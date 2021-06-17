import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../login/user.model';
import { SignupService } from './signup.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  constructor(private signupService: SignupService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, Validators.required], 
      password: [null, [Validators.required, Validators.email]]
    });

    console.log(this.form);
  }

  createUser(): void {
    this.signupService.createUser(this.form.value).subscribe(() => {
      this.signupService.showMessage('Usuário criado com sucesso!');
      this.router.navigate(['/login']);
    });
  }

  cancel(): void {
    this.router.navigate(['/signup']);
  }

}
