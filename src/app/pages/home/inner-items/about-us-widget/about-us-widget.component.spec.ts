import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsWidgetComponent } from './about-us-widget.component';

describe('AboutUsWidgetComponent', () => {
  let component: AboutUsWidgetComponent;
  let fixture: ComponentFixture<AboutUsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
