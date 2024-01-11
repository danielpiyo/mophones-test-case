import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: 'payment.page.html',
  styleUrls: ['payment.page.scss'],
})
export class PaymentPage implements OnInit {
  tabID = 1;
  paymentAmount = 50;
  constructor(private route: Router, private navCtrl: NavController) {}

  ngOnInit(): void {
    this.tabID = 1;
  }
  goToTabs() {
    this.tabID = 1;
    this.route.navigate(['/tabs']);
  }

  goBack() {
    this.navCtrl.back();
  }
}
