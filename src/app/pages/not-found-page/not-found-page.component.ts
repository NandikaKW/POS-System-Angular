// not-found-page.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { QuickLinkDto } from '../../dto/quick-link';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {

  quickLinks: QuickLinkDto[] = [ // Use QuickLinkDto instead of QuickLink
    {
      label: 'Sales',
      route: '/sales',
      iconPath: `<path d="M2 12l4-4 3 3 5-6 3 2" stroke="#0066CC" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
    {
      label: 'Inventory',
      route: '/inventory',
      iconPath: `<path d="M2 4h12v8H2V4zM5 4V2h6v2M6 8h4" stroke="#0066CC" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
    {
      label: 'Customers',
      route: '/customers',
      iconPath: `<circle cx="6" cy="5" r="2.5" stroke="#0066CC" stroke-width="1.4"/><path d="M1 13c0-2.8 2.2-4 5-4s5 1.2 5 4" stroke="#0066CC" stroke-width="1.4" stroke-linecap="round"/><path d="M11 3a2.5 2.5 0 0 1 0 5M15 13c0-2-1.3-3.3-4-3.8" stroke="#0066CC" stroke-width="1.4" stroke-linecap="round"/>`,
    },
    {
      label: 'Reports',
      route: '/reports',
      iconPath: `<rect x="1" y="1" width="14" height="14" rx="2" stroke="#0066CC" stroke-width="1.4"/><path d="M4 10l2.5-3L9 9l3-4" stroke="#0066CC" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
    {
      label: 'Settings',
      route: '/settings',
      iconPath: `<circle cx="8" cy="8" r="2.5" stroke="#0066CC" stroke-width="1.4"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke="#0066CC" stroke-width="1.4" stroke-linecap="round"/>`,
    },
  ];

  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    // Any initialization logic here
  }

  goHome(): void {
    this.router.navigate(['/dashboard']);
  }

  goBack(): void {
    this.location.back();
  }
}
