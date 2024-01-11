import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PaymentPage } from './payment.page';

describe('PaymentPage', () => {
  let component: PaymentPage;
  let fixture: ComponentFixture<PaymentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a back button', () => {
    const backButton = fixture.nativeElement.querySelector(
      '[data-testid="back-button"]'
    );
    expect(backButton).toBeTruthy();
  });

  it('should have a title', () => {
    const title = fixture.nativeElement.querySelector('[data-testid="title"]');
    expect(title).toBeTruthy();
  });

  it('should update tabID when Pay button is clicked', () => {
    const payButton = fixture.nativeElement.querySelector(
      '[data-testid="pay-button"]'
    );
    payButton.click();
    fixture.detectChanges();
    expect(component.tabID).toEqual(3);
  });

  it('should display payment label', () => {
    const paymentLabel = fixture.nativeElement.querySelector(
      '[data-testid="payment-label"]'
    );
    expect(paymentLabel).toBeTruthy();
  });

  it('should update paymentAmount when input value changes', () => {
    const paymentAmountInput = fixture.nativeElement.querySelector(
      '[data-testid="payment-amont"]'
    );
    const newValue = 50;
    paymentAmountInput.value = newValue;
    paymentAmountInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.paymentAmount).toEqual(newValue);
  });

  it('should have a logo image', () => {
    const logoImage = fixture.nativeElement.querySelector(
      '[data-testid="logo-img"]'
    );
    expect(logoImage).toBeTruthy();
  });

  it('should have product details', () => {
    const productDetail = fixture.nativeElement.querySelector(
      '[data-testid="product-detail"]'
    );
    expect(productDetail).toBeTruthy();
  });

  it('should have a stepper section', () => {
    const stepperSection = fixture.nativeElement.querySelector(
      '[data-testid="stepper-section"]'
    );
    expect(stepperSection).toBeTruthy();
  });

  it('should have account number', () => {
    const accountNumber = fixture.nativeElement.querySelector(
      '[data-testid="account-number"]'
    );
    expect(accountNumber).toBeTruthy();
  });

  it('should have a balance row', () => {
    const balanceRow = fixture.nativeElement.querySelector(
      '[data-testid="balance-row"]'
    );
    expect(balanceRow).toBeTruthy();
  });

  it('should have a last payment row', () => {
    const lastPaymentRow = fixture.nativeElement.querySelector(
      '[data-testid="last-payment-row"]'
    );
    expect(lastPaymentRow).toBeTruthy();
  });

  it('should have a usage left row', () => {
    const usageLeftRow = fixture.nativeElement.querySelector(
      '[data-testid="usage-left"]'
    );
    expect(usageLeftRow).toBeTruthy();
  });

  it('should have a cost usage row', () => {
    const costUsageRow = fixture.nativeElement.querySelector(
      '[data-testid="cost-usage"]'
    );
    expect(costUsageRow).toBeTruthy();
  });

  it('should have a payment number row', () => {
    const paymentNumberRow = fixture.nativeElement.querySelector(
      '[data-testid="payment-number"]'
    );
    expect(paymentNumberRow).toBeTruthy();
  });

  it('should have a tab1 section', () => {
    const tab1Section = fixture.nativeElement.querySelector(
      '[data-testid="tab1-section"]'
    );
    expect(tab1Section).toBeTruthy();
  });

  it('should have a tab3 section', () => {
    // Set tabID to 3 to simulate the state
    component.tabID = 3;
    fixture.detectChanges(); // Ensure the template is updated

    const tab3Section = fixture.nativeElement.querySelector(
      '[data-testid="tab3-section"]'
    );
    expect(tab3Section).toBeTruthy();
  });
});
