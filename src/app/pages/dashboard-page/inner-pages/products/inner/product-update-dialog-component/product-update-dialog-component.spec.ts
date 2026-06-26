import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUpdateDialogComponentComponent } from './product-update-dialog-component';

describe('ProductUpdateDialogComponentComponent', () => {
  let component: ProductUpdateDialogComponentComponent;
  let fixture: ComponentFixture<ProductUpdateDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUpdateDialogComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductUpdateDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
