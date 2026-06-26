import {Component, Inject, OnInit} from '@angular/core';
import {Customer} from "../../../../../../dto/Customer";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-customer-update-dialog-component',
  templateUrl: './customer-update-dialog-component.html',
  styleUrls: ['./customer-update-dialog-component.scss']
})
export class CustomerUpdateDialogComponentComponent implements OnInit {
  customer: Customer;

  constructor(
    private dialogRef: MatDialogRef<CustomerUpdateDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) data: Customer
  ) {
    this.customer = { ...data };
  }

  ngOnInit(): void {}

  isValid(): boolean {
    return !!(this.customer.name?.trim() &&
      this.customer.address?.trim() &&
      this.customer.salary &&
      this.customer.salary > 0);
  }

  onSave(): void {
    if (this.isValid()) {
      this.dialogRef.close(this.customer);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
