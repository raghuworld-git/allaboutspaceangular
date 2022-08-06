import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'launches',
    loadChildren: () => import('./features/launches/launches.module').then(m => m.LaunchesModule)
  },
  {
    path: 'agencies',
    loadChildren: () => import('./features/agencies/agencies.module').then(m => m.AgenciesModule)
  },
  {
    path: '', pathMatch: 'full'
    , redirectTo: '/home'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
