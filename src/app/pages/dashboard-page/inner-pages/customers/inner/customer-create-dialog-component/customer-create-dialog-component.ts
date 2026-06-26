import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {Customer} from "../../../../../../dto/Customer";



@Component({
  selector: 'app-customer-create-dialog-component',
  templateUrl: './customer-create-dialog-component.html',
  styleUrls: ['./customer-create-dialog-component.scss']
})
export class CustomerCreateDialogComponentComponent implements OnInit {
  customer: Partial<Customer> = {
    name: '',
    address: '',
    salary: 0
  };

  constructor(private dialogRef: MatDialogRef<CustomerCreateDialogComponentComponent>) {}

  ngOnInit(): void {}

  isValid(): boolean {
    return !!(this.customer.name?.trim() &&
      this.customer.address?.trim() &&
      this.customer.salary &&
      this.customer.salary > 0);
  }

  onSave(): void {
    if (this.isValid()) {
      this.dialogRef.close(this.customer as Customer);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
