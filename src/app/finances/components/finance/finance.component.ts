import { Component, Input, OnInit } from '@angular/core';
import { Finances } from '../../finances.model';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  @Input() finances: Finances;

  constructor() { }

  ngOnInit(): void {
  }

}
