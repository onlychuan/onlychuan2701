import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'navigation',
    loadChildren: () => import('./navigation/navigation.module').then( m => m.NavigationPageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'navimps',
    loadChildren: () => import('./navimps/navimps.module').then( m => m.NavimpsPageModule)
  },
  {
    path: 'chart',
    loadChildren: () => import('./chart/chart.module').then( m => m.ChartPageModule)
  },
  {
    path: 'studentdetil',
    loadChildren: () => import('./studentdetil/studentdetil.module').then( m => m.StudentdetilPageModule)
  },
  {
    path: 'detailpage',
    loadChildren: () => import('./detailpage/detailpage.module').then( m => m.DetailpagePageModule)
  },
  {
    path: 'datailedit',
    loadChildren: () => import('./datailedit/datailedit.module').then( m => m.DataileditPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
