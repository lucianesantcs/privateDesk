import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() pageTitle: string;

  showLoginMenu: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.showLoginMenuEmitter.subscribe(
      show => this.showLoginMenu = show
    )
  }

}
