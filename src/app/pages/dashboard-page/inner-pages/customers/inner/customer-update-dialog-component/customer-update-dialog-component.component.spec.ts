import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerUpdateDialogComponentComponent } from './customer-update-dialog-component.component';

describe('CustomerUpdateDialogComponentComponent', () => {
  let component: CustomerUpdateDialogComponentComponent;
  let fixture: ComponentFixture<CustomerUpdateDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerUpdateDialogComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerUpdateDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
