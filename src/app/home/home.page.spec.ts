import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a "Home" label ', () => {
    const homeLabel = fixture.nativeElement.querySelector(
      '[data-testid="home-label"]'
    );
    expect(homeLabel).toBeTruthy();
    expect(homeLabel.textContent.trim()).toBe('Home');
  });

  it('should have a notifications badge ', () => {
    const notificationsBadge = fixture.nativeElement.querySelector(
      '[data-testid="notifications-badge"]'
    );
    expect(notificationsBadge).toBeTruthy();
    expect(notificationsBadge.textContent.trim()).toBe('2');
  });

  it('should have Product section', () => {
    const productSection = fixture.nativeElement.querySelector(
      '[data-testid="product-section"]'
    );
    expect(productSection).toBeTruthy();
    expect(productSection.textContent.trim()).toBe('Mophones');
  });

  it('should have the last payment date section', () => {
    const lastPaymentSection = fixture.nativeElement.querySelector(
      '[data-testid="last-payment-section"]'
    );
    expect(lastPaymentSection).toBeTruthy();
    expect(lastPaymentSection.textContent.trim()).toBe('3 days ago');
  });

  it('should have the time Time to lock label', () => {
    const timeToLockSection = fixture.nativeElement.querySelector(
      '[data-testid="time-to-lock-label"]'
    );
    expect(timeToLockSection).toBeTruthy();
    expect(timeToLockSection.textContent.trim()).toBe('Time to lock');
  });

  it('should have the Amount to pay label', () => {
    const amountToPay = fixture.nativeElement.querySelector(
      '[data-testid="amount-to-pay-label"]'
    );
    expect(amountToPay).toBeTruthy();
  });
});
