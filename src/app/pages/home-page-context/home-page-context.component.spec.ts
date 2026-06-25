import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageContextComponent } from './home-page-context.component';

describe('HomePageContextComponent', () => {
  let component: HomePageContextComponent;
  let fixture: ComponentFixture<HomePageContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
