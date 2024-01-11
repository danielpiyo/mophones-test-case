import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-transactions',
  templateUrl: 'transactions.page.html',
  styleUrls: ['transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
  number = 1;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.number = 1;
  }

  goBack() {
    this.navCtrl.back();
  }
}
