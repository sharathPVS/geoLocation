import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'location', loadChildren: './location/location.module#LocationPageModule' },
  { path: 'simData', loadChildren: './sim-data/sim-data.module#SimDataPageModule' },
  { path: 'adminApprove', loadChildren: './admin-approve/admin-approve.module#adminApprovePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
