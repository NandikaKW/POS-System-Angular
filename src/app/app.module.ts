import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './core/core/main-header/main-header.component';
import { MainFooterComponent } from './core/core/main-footer/main-footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroWidgetComponent } from './pages/home/inner-items/hero-widget/hero-widget.component';
import { AboutUsWidgetComponent } from './pages/home/inner-items/about-us-widget/about-us-widget.component';
import { PricingWidgetComponent } from './pages/home/inner-items/pricing-widget/pricing-widget.component';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { RegisterPageComponent } from './pages/auth/register-page/register-page.component';
import { DashboardMainHeaderComponent } from './pages/dashboard-page/inner-pages/core/dashboard-main-header/dashboard-main-header.component';
import { DashboardMainFooterComponent } from './pages/dashboard-page/inner-pages/core/dashboard-main-footer/dashboard-main-footer.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { HomePageContextComponent } from './pages/home-page-context/home-page-context.component';
import { CustomersComponent } from './pages/dashboard-page/inner-pages/customers/customers.component';
import { ProductsComponent } from './pages/dashboard-page/inner-pages/products/products.component';
import { OrdersComponent } from './pages/dashboard-page/inner-pages/orders/orders.component';
import { PlaceOrderComponent } from './pages/dashboard-page/inner-pages/place-order/place-order.component';
import { StatisticsComponent } from './pages/dashboard-page/inner-pages/statistics/statistics.component';
import { CustomerCreateDialogComponentComponent } from './pages/dashboard-page/inner-pages/customers/inner/customer-create-dialog-component/customer-create-dialog-component.component';
import { CustomerUpdateDialogComponentComponent } from './pages/dashboard-page/inner-pages/customers/inner/customer-update-dialog-component/customer-update-dialog-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    HomeComponent,
    LoginPageComponent,
    RegisterPageComponent,
    DashboardPageComponent,
    DashboardMainHeaderComponent,
    DashboardMainFooterComponent,
    NotFoundPageComponent,
    DashboardPageComponent,
    HomePageContextComponent,
    CustomersComponent,
    ProductsComponent,
    OrdersComponent,
    PlaceOrderComponent,
    StatisticsComponent,
    CustomerCreateDialogComponentComponent,
    CustomerUpdateDialogComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainFooterComponent,
    HeroWidgetComponent,
    AboutUsWidgetComponent,
    PricingWidgetComponent,
    BrowserAnimationsModule,

    MatIconModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
