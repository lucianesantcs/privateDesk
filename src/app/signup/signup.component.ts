import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupService: SignupService, private router: Router) { }

  ngOnInit(): void {
  }

  createUser(): void {
    this.signupService.showMessage('Usuário criado com sucesso!');
    this.router.navigate(['/login']);
  }

  cancel(): void {
    this.router.navigate(['/signup']);
  }

}
