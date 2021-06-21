import { Component, OnInit } from '@angular/core';
import { Finances } from '../finances.model';
import { FinancesService } from '../finances.service';

@Component({
  selector: 'app-all-finances',
  templateUrl: './all-finances.component.html',
  styleUrls: ['./all-finances.component.scss']
})
export class AllFinancesComponent implements OnInit {

  finances: Finances;

  constructor(private financesService: FinancesService) { }

  ngOnInit(): void {
    this.financesService.getFinances().subscribe(finance => this.finances = finance);
  }

}
