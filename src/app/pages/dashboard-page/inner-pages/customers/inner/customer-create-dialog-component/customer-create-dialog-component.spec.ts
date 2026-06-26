import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCreateDialogComponentComponent } from './customer-create-dialog-component';

describe('CustomerCreateDialogComponentComponent', () => {
  let component: CustomerCreateDialogComponentComponent;
  let fixture: ComponentFixture<CustomerCreateDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCreateDialogComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerCreateDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
