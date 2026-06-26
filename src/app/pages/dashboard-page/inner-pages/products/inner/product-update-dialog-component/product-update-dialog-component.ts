import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Product} from "../../../../../../dto/Product";

@Component({
  selector: 'app-product-update-dialog-component',
  templateUrl: './product-update-dialog-component.html',
  styleUrls: ['./product-update-dialog-component.scss']
})
export class ProductUpdateDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProductUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
  ) {
    this.form = this.fb.group({
      description: ['', [Validators.required]],
      qtyOnHand: [null, [Validators.required, Validators.min(0)]],
      unitPrice: [null, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    this.form.patchValue({
      description: this.data.description,
      qtyOnHand: this.data.qtyOnHand,
      unitPrice: this.data.unitPrice,
    });
  }

  save(): void {
    if (this.form.valid) {
      this.dialogRef.close({ ...this.data, ...this.form.value });
    } else {
      this.form.markAllAsTouched();
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
