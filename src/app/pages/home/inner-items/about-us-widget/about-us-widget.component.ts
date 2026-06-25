import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us-widget.component.html',
  styleUrls: ['./about-us-widget.component.scss']
})
export class AboutUsWidgetComponent {
  features = [
    {
      title: 'Lightning Fast',
      description: 'Process transactions in under 1 second. No lag, no timeouts — even during peak hours with hundreds of concurrent users.',
    },
    {
      title: 'Always Online',
      description: 'Our offline-first architecture means your business never stops, even when internet connectivity drops unexpectedly.',
    },
    {
      title: 'Real-Time Analytics',
      description: 'Watch your sales, inventory levels, and customer trends update live. Make decisions with data, not guesswork.',
    },
    {
      title: 'Multi-Location Ready',
      description: 'Manage every branch from a single dashboard. Sync inventory, staff, and reports across all your locations instantly.',
    },
    {
      title: 'Secure Payments',
      description: 'PCI DSS Level 1 compliant. Accept cards, mobile wallets, QR codes, and cash with end-to-end encryption on every transaction.',
    },
    {
      title: '24/7 Support',
      description: 'Real humans available around the clock. Live chat, phone, and email — because your business doesn\'t keep office hours.',
    }
  ];

  values: string[] = [
    'Radical simplicity in everything we build',
    'Transparency with pricing and data',
    'Speed as a feature, not an afterthought',
    'Customer success before sales targets',
  ];
}
