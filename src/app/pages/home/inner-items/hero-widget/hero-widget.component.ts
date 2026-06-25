import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatDTO } from '../../../../dto';

@Component({
  selector: 'app-hero-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-widget.component.html',
  styleUrls: ['./hero-widget.component.scss']
})
export class HeroWidgetComponent {
  stats: StatDTO[] = [
    { value: '50K+', label: 'Active Businesses' },
    { value: '$2B+', label: 'Processed Monthly' },
    { value: '99.9%', label: 'Uptime SLA' },
  ];

  chartBars: number[] = [45, 60, 40, 75, 55, 85, 70, 90, 65, 95, 80, 100];
  chartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  onGetStarted(): void {
    console.log('Get Started clicked');
    // Navigate to signup / registration route
    // this.router.navigate(['/signup']);
  }

  onWatchDemo(): void {
    console.log('Watch Demo clicked');
    // Open demo modal or navigate to demo page
    // this.router.navigate(['/demo']);
  }
}
