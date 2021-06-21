import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Finances } from '../finances.model';
import { FinancesService } from '../finances.service';

@Component({
  selector: 'app-add-finances',
  templateUrl: './add-finances.component.html',
  styleUrls: ['./add-finances.component.scss']
})
export class AddFinancesComponent implements OnInit {
  
  createdAt = new Date().getTime().toString();

  finance: Finances = {
    title: '',
    description: '',
    value: null,
    date: this.createdAt
  }
  
  constructor(private financesService: FinancesService, private router: Router) { }

  ngOnInit(): void {
  }

  createFinance() {
    return this.financesService.createFinance(this.finance).subscribe(() => {
      this.financesService.showMessage('Finança adicionada com sucesso!');
      this.router.navigate(['/finances/all-finances']);
    });
  }

}
