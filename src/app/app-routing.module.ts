import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {NotFoundPageComponent} from "./pages/not-found-page/not-found-page.component";
import {HomePageContextComponent} from "./pages/home-page-context/home-page-context.component";
import {LoginPageComponent} from "./pages/auth/login-page/login-page.component";
import {RegisterPageComponent} from "./pages/auth/register-page/register-page.component";
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";
import {AuthGuard} from "./guards/auth-guard";
import {StatisticsComponent} from "./pages/dashboard-page/inner-pages/statistics/statistics.component";
import {CustomersComponent} from "./pages/dashboard-page/inner-pages/customers/customers.component";
import {ProductsComponent} from "./pages/dashboard-page/inner-pages/products/products.component";
import {OrdersComponent} from "./pages/dashboard-page/inner-pages/orders/orders.component";
import {PlaceOrderComponent} from "./pages/dashboard-page/inner-pages/place-order/place-order.component";

const routes: Routes = [
  { path: '', redirectTo: 'home/process', pathMatch: 'full' },

  {
    path: 'home',
    component: HomePageContextComponent,
    children: [
      { path: '', redirectTo: 'process', pathMatch: 'full' },
      { path: 'process', component: HomeComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegisterPageComponent }
    ]
  },

  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'customer', pathMatch: 'full' },
      { path: 'customer', component: CustomersComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'placeorders', component: PlaceOrderComponent },
      { path: 'reports', component: StatisticsComponent }
    ]
  },

  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
