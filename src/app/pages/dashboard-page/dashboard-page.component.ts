import { Component, OnInit } from '@angular/core';
import {TabBar} from '../../dto/TabBar';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  tabs: TabBar[] = [
    { label: 'Customers', path: 'customer', icon: 'fas fa-users' },
    { label: 'Products', path: 'products', icon: 'fas fa-boxes' },
    { label: 'Orders', path: 'orders', icon: 'fas fa-shopping-cart' },
    { label: 'Place Order', path: 'placeorders', icon: 'fas fa-plus-circle' },
    { label: 'Reports', path: 'reports', icon: 'fas fa-chart-bar' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
