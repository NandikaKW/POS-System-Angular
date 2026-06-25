import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-main-footer',
  templateUrl: './dashboard-main-footer.component.html',
  styleUrls: ['./dashboard-main-footer.component.scss']
})
export class DashboardMainFooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();


  constructor() { }

  ngOnInit(): void {
  }

}
