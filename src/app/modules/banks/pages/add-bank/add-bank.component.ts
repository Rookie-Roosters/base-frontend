import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BankingService } from 'src/app/data/services/banking.service';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css'],
})
export class AddBankComponent implements OnInit {
  validators = [Validators.required];

  bankFormControl = new FormGroup({
    bank: new FormControl('', this.validators),
    account: new FormControl('', this.validators),
    password: new FormControl('', this.validators),
    token: new FormControl('', this.validators),
  });

  constructor(
    private bankingService: BankingService,
  ) {}

  ngOnInit(): void {}

  async addBank() {
    if(this.bankFormControl.valid) {
      
    } else alert('Debe llenar todos los campos');
  }
}
