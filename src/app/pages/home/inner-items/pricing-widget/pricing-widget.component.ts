import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-widget.component.html',
  styleUrls: ['./pricing-widget.component.scss']
})
export class PricingWidgetComponent {
  isAnnual = false;

  plans = [
    {
      name: 'Starter',
      description: 'Perfect for solo shops and pop-ups just getting started.',
      monthlyPrice: 0,
      annualPrice: 0,
      popular: false,
      ctaLabel: 'Start for Free',
      iconBg: '#E8F2FF',
      iconSvg: `<path d="M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" stroke="#0066CC" stroke-width="1.6"/><path d="M16 3H8L6 7h12l-2-4z" stroke="#0066CC" stroke-width="1.6" stroke-linejoin="round"/>`,
      features: [
        { text: '1 register / terminal', included: true },
        { text: 'Up to 200 transactions/month', included: true },
        { text: 'Basic sales reports', included: true },
        { text: 'Accept card & cash', included: true },
        { text: 'Inventory management', included: false },
        { text: 'Multi-location support', included: false },
        { text: 'Staff accounts', included: false },
        { text: 'Priority support', included: false },
      ],
    },
    {
      name: 'Growth',
      description: 'For growing businesses that need more power and insights.',
      monthlyPrice: 49,
      annualPrice: 39,
      popular: true,
      ctaLabel: 'Get Started',
      iconBg: '#0066CC',
      iconSvg: `<path d="M3 3v18h18M7 16l4-4 4 4 4-8" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`,
      features: [
        { text: 'Up to 5 registers', included: true },
        { text: 'Unlimited transactions', included: true },
        { text: 'Advanced analytics & reports', included: true },
        { text: 'All payment methods', included: true },
        { text: 'Full inventory management', included: true },
        { text: 'Up to 3 locations', included: true },
        { text: 'Up to 10 staff accounts', included: true },
        { text: 'Priority support', included: false },
      ],
    },
    {
      name: 'Pro',
      description: 'For established businesses scaling across multiple locations.',
      monthlyPrice: 119,
      annualPrice: 95,
      popular: false,
      ctaLabel: 'Start Pro Trial',
      iconBg: '#E8F2FF',
      iconSvg: `<path d="M12 2l3 6.3L22 9l-5 4.9L18.2 21 12 17.8 5.8 21 7 13.9 2 9l7-0.7L12 2z" stroke="#0066CC" stroke-width="1.6" stroke-linejoin="round"/>`,
      features: [
        { text: 'Unlimited registers', included: true },
        { text: 'Unlimited transactions', included: true },
        { text: 'Custom reports & exports', included: true },
        { text: 'All payment methods + crypto', included: true },
        { text: 'Advanced inventory + PO management', included: true },
        { text: 'Unlimited locations', included: true },
        { text: 'Unlimited staff + role permissions', included: true },
        { text: '24/7 dedicated support', included: true },
      ],
    },
  ];

  toggleBilling(): void {
    this.isAnnual = !this.isAnnual;
  }

  onSelectPlan(plan: any): void {
    console.log('Plan selected:', plan.name);
  }

  onContactSales(): void {
    console.log('Contact Sales clicked');
  }
}
