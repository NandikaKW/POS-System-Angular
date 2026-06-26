import { Component, OnInit } from '@angular/core';
import {Product} from "../../../../dto/Product";
import {MatDialog} from "@angular/material/dialog";
import {PageEvent} from "@angular/material/paginator";
import {
  ProductCreateDialogComponent
} from "./inner/product-create-dialog-component/product-create-dialog-component";
import {DUMMY_PRODUCTS} from "../../../../dto/DummyData";
import {
  ProductUpdateDialogComponent
} from "./inner/product-update-dialog-component/product-update-dialog-component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class Products implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  pagedProducts: Product[] = [];

  searchTerm = '';
  currentPage = 1;
  pageSize = 10;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.products = [...DUMMY_PRODUCTS];
    this.filteredProducts = [...this.products];
    this.updatePage();
  }

  onSearch(): void {
    const term = this.searchTerm.toLowerCase().trim();
    this.filteredProducts = this.products.filter(
      (p) =>
        p.description.toLowerCase().includes(term) ||
        p.unitPrice.toString().includes(term) ||
        p.qtyOnHand.toString().includes(term),
    );
    this.currentPage = 1;
    this.updatePage();
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.onSearch();
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex + 1;
    this.updatePage();
  }

  updatePage(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedProducts = this.filteredProducts.slice(start, start + this.pageSize);
  }

  min(a: number, b: number): number {
    return Math.min(a, b);
  }

  openCreateDialog(): void {
    const ref = this.dialog.open(ProductCreateDialogComponent, {
      width: '480px',
      panelClass: 'custom-dialog',
    });
    ref.afterClosed().subscribe((result: Product | undefined) => {
      if (result) {
        const newId = Math.max(...this.products.map((p) => p.id)) + 1;
        this.products.unshift({ ...result, id: newId });
        this.onSearch();
      }
    });
  }

  openUpdateDialog(product: Product): void {
    const ref = this.dialog.open(ProductUpdateDialogComponent, {
      width: '480px',
      panelClass: 'custom-dialog',
      data: { ...product },
    });
    ref.afterClosed().subscribe((result: Product | undefined) => {
      if (result) {
        const idx = this.products.findIndex((p) => p.id === result.id);
        if (idx !== -1) {
          this.products[idx] = result;
          this.onSearch();
        }
      }
    });
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter((p) => p.id !== id);
    this.onSearch();
  }
}
