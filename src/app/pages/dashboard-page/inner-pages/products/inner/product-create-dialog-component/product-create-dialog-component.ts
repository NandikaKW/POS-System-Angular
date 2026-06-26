import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-product-create-dialog-component',
  templateUrl: './product-create-dialog-component.html',
  styleUrls: ['./product-create-dialog-component.scss']
})
export class ProductCreateDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProductCreateDialogComponent>,
  ) {
    this.form = this.fb.group({
      description: ['', [Validators.required]],
      qtyOnHand: [null, [Validators.required, Validators.min(0)]],
      unitPrice: [null, [Validators.required, Validators.min(0)]],
    });
  }

  save(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
