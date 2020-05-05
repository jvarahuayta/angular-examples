import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'akita-store-pagination',
    loadChildren: () =>
      import('./akita-store-pagination/akita-store-pagination.module').then(
        m => m.AkitaStorePaginationModule
      )
  },
  {
    path: 'nice-pagination',
    loadChildren: () =>
      import('./nice-pagination/nice-pagination.module').then(
        m => m.NicePaginationModule
      )
  },
  {
    path: 'url-to-file',
    loadChildren: () =>
      import('./url-to-file/url-to-file.module').then(m => m.UrlToFileModule)
  },
  { path: 'graphql', loadChildren: () => import('./graphql/graphql.module').then(m => m.GraphqlModule) },
  { path: 'presentation-components', loadChildren: () => import('./presentation-components/presentation-components.module').then(m => m.PresentationComponentsModule) },
  {
    path: '**',
    loadChildren: () =>
      import('./features-list/features-list.module').then(
        m => m.FeaturesListModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
