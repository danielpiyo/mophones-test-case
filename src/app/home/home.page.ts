import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tabID = 1;
  activity = [
    {
      name: 'Amazon',
      price: '- $35.88',
      image: 'assets/imgs/cart.png',
      color: '#FF7E87',
    },
    {
      name: 'Shell',
      price: '- $78.88',
      image: 'assets/imgs/pump.png',
      color: '#00D793  ',
    },
    {
      name: 'Shopping',
      price: '- $50.92',
      image: 'assets/imgs/cart.png',
      color: '#FF7E87',
    },
  ];

  constructor(private router: Router) {}

  goToMyAccount() {
    // this.router.navigate(['/transfer']);
  }

  goToPayment() {
    this.router.navigate(['/tabs/payment']);
  }

  goToUnlock() {
    // this.router.navigate(['/unlock']);
  }

  goToContactus() {
    // this.router.navigate(['/contact-us']);
  }
}
