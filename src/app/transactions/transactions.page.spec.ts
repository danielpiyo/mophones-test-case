import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TransactionsPage } from './transactions.page';

describe('TransactionsPage', () => {
  let component: TransactionsPage;
  let fixture: ComponentFixture<TransactionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a back button ', () => {
    const backButton = fixture.nativeElement.querySelector(
      '[data-testid="back-button"]'
    );
    expect(backButton).toBeTruthy();
  });

  it('should have a title on the toolbar ', () => {
    const titleSection = fixture.nativeElement.querySelector(
      '[data-testid="title"]'
    );
    expect(titleSection).toBeTruthy();
    expect(titleSection.textContent.trim()).toBe('Transaction List');
  });

  it('should have mophones logo image', () => {
    const logoSection = fixture.nativeElement.querySelector(
      '[data-testid="logo-img"]'
    );
    expect(logoSection).toBeTruthy();
  });

  it('should render transaction list with details', () => {
    const transactionList = fixture.nativeElement.querySelector(
      '[data-testid="transaction-list"]'
    );
    expect(transactionList).toBeTruthy();

    const transactionLabels = fixture.nativeElement.querySelectorAll(
      '[data-testid="transaction-label-details"]'
    );
    expect(transactionLabels.length).toEqual(7);

    transactionLabels.forEach((label: { textContent: any }, index: number) => {
      expect(label.textContent).toContain(`Payment: ${index + 1} - ksh 50/=`);
      expect(label.textContent).toContain('2nd January 2024');
    });

    const detailLabels = fixture.nativeElement.querySelectorAll(
      '[data-testid="detail-list"]'
    );
    expect(detailLabels.length).toEqual(7); // Adjust the length based on your actual data
  });

  it('should have transaction detail labels', () => {
    const transactionLabels = fixture.nativeElement.querySelector(
      '[data-testid="transaction-label-details"]'
    );
    expect(transactionLabels).toBeTruthy();
  });

  it('should have the detail section', () => {
    const detailSection = fixture.nativeElement.querySelector(
      '[data-testid="detail-list"]'
    );
    expect(detailSection).toBeTruthy();
    expect(detailSection.textContent.trim()).toBe('Details');
  });
});
