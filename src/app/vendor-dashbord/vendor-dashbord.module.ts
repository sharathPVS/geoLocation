import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { vendorDashboardPage } from './vendor-dashbord.page';

const routes: Routes = [
  {
    path: '',
    component: vendorDashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [vendorDashboardPage]
})
export class vendorDashboard {}
