import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavColumnDTO } from '../../../dto';
import { SocialLinkDTO } from '../../../dto';

@Component({
  selector: 'app-main-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent {
  brandName = 'SwiftPOS';
  currentYear = new Date().getFullYear();
  emailInput = '';

  socialLinks: SocialLinkDTO[] = [
    {
      label: 'Twitter / X',
      url: 'https://twitter.com',
      iconPath: `<path d="M18 3h-3.5L10 9.5 5.5 3H2l6.2 8.8L2 17h3.5l4-5.5L14.5 17H18l-6.5-9.2L18 3z" fill="currentColor"/>`,
    },
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com',
      iconPath: `<path d="M3 3h4v14H3V3zm2-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM8 7h3.6v2h.1c.5-1 1.8-2 3.6-2C18.5 7 19 9.6 19 12v5h-4v-4.5c0-1.1 0-2.5-1.5-2.5S12 11.4 12 12.4V17H8V7z" fill="currentColor"/>`,
    },
    {
      label: 'Facebook',
      url: 'https://facebook.com',
      iconPath: `<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
    {
      label: 'YouTube',
      url: 'https://youtube.com',
      iconPath: `<rect x="2" y="5" width="16" height="12" rx="3" stroke="currentColor" stroke-width="1.4"/><path d="M8 8.5l5 2-5 2v-4z" fill="currentColor"/>`,
    },
  ];

  navColumns: NavColumnDTO[] = [
    {
      title: 'Product',
      links: [
        { label: 'Features', url: '/features' },
        { label: 'Pricing', url: '/pricing' },
        { label: 'Integrations', url: '/integrations' },
        { label: 'Changelog', url: '/changelog' },
        { label: 'Roadmap', url: '/roadmap' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Retail', url: '/solutions/retail' },
        { label: 'Restaurants', url: '/solutions/restaurants' },
        { label: 'E-commerce', url: '/solutions/ecommerce' },
        { label: 'Multi-location', url: '/solutions/enterprise' },
        { label: 'Franchises', url: '/solutions/franchise' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', url: '/docs' },
        { label: 'Help Center', url: '/help' },
        { label: 'Blog', url: '/blog' },
        { label: 'Community', url: '/community' },
        { label: 'API Reference', url: '/api' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', url: '/about' },
        { label: 'Careers', url: '/careers' },
        { label: 'Press Kit', url: '/press' },
        { label: 'Partners', url: '/partners' },
        { label: 'Contact', url: '/contact' },
      ],
    },
  ];

  onSubscribe(): void {
    if (this.emailInput && this.emailInput.includes('@')) {
      console.log('Subscribed:', this.emailInput);
      this.emailInput = '';
      // You can add a toast/snackbar notification here
    } else {
      console.warn('Please enter a valid email address');
    }
  }
}
