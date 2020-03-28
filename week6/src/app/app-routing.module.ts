import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  
  {
    path: 'acount/:firstName',
    loadChildren: () => import('./acount/acount.module').then( m => m.AcountPageModule)
  },
  {
    path: 'add-page',
    loadChildren: () => import('./add-page/add-page.module').then( m => m.AddPagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
