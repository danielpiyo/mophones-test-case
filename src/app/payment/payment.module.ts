import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentPage } from './payment.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PaymentPageRoutingModule } from './payment-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PaymentPageRoutingModule,
  ],
  declarations: [PaymentPage],
})
export class PaymentPageModule {}
