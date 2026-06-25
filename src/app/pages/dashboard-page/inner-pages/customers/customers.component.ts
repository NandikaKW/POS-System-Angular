import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../../dto/Customer";
import { MatDialog } from '@angular/material/dialog';
import { DUMMY_CUSTOMERS } from "../../../../dto/DummyData";
import {PageEvent} from "@angular/material/paginator";
import {
  CustomerCreateDialogComponentComponent
} from "./inner/customer-create-dialog-component/customer-create-dialog-component.component";
import {
  CustomerUpdateDialogComponentComponent
} from "./inner/customer-update-dialog-component/customer-update-dialog-component.component";




@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  filteredCustomers: Customer[] = [];
  pagedCustomers: Customer[] = [];

  searchTerm = '';
  currentPage = 1;
  pageSize = 10;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customers = [...DUMMY_CUSTOMERS];
    this.filteredCustomers = [...this.customers];
    this.updatePage();
  }

  onSearch(): void {
    const term = this.searchTerm.toLowerCase().trim();
    if (!term) {
      this.filteredCustomers = [...this.customers];
    } else {
      this.filteredCustomers = this.customers.filter(
        (c) =>
          c.name.toLowerCase().includes(term) ||
          c.address.toLowerCase().includes(term) ||
          c.salary.toString().includes(term)
      );
    }
    this.currentPage = 1;
    this.updatePage();
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.onSearch();
  }

  onPageChange(event: any): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex + 1;
    this.updatePage();
  }

  updatePage(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = Math.min(start + this.pageSize, this.filteredCustomers.length);
    this.pagedCustomers = this.filteredCustomers.slice(start, end);
  }

  min(a: number, b: number): number {
    return Math.min(a, b);
  }

  openCreateDialog(): void {
    const ref = this.dialog.open(CustomerCreateDialogComponentComponent, {
      width: '480px',
      panelClass: 'custom-dialog',
      disableClose: true,
    });
    ref.afterClosed().subscribe((result: Customer | undefined) => {
      if (result) {
        const maxId = this.customers.reduce((max, c) => Math.max(max, c.id), 0);
        const newCustomer = { ...result, id: maxId + 1 };
        this.customers.unshift(newCustomer);
        this.onSearch();
      }
    });
  }

  openUpdateDialog(customer: Customer): void {
    const ref = this.dialog.open(CustomerUpdateDialogComponentComponent, {
      width: '480px',
      panelClass: 'custom-dialog',
      data: { ...customer },
      disableClose: true,
    });
    ref.afterClosed().subscribe((result: Customer | undefined) => {
      if (result) {
        const idx = this.customers.findIndex((c) => c.id === result.id);
        if (idx !== -1) {
          this.customers[idx] = result;
          this.onSearch();
        }
      }
    });
  }

  deleteCustomer(id: number): void {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customers = this.customers.filter((c) => c.id !== id);
      this.onSearch();
    }
  }
}
