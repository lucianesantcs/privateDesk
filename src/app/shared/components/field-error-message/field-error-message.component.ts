import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-error-message',
  templateUrl: './field-error-message.component.html',
  styleUrls: ['./field-error-message.component.scss']
})
export class FieldErrorMessageComponent implements OnInit {

  @Input() showError: boolean;
  @Input() errorMessage: string;
  @Input() hasError = 'has-error';

  constructor() { }

  ngOnInit(): void {
  }

}
