import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreateDialogComponentComponent } from './product-create-dialog-component';

describe('ProductCreateDialogComponentComponent', () => {
  let component: ProductCreateDialogComponentComponent;
  let fixture: ComponentFixture<ProductCreateDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCreateDialogComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCreateDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
