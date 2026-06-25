import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMainFooterComponent } from './dashboard-main-footer.component';

describe('DashboardMainFooterComponent', () => {
  let component: DashboardMainFooterComponent;
  let fixture: ComponentFixture<DashboardMainFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMainFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardMainFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
