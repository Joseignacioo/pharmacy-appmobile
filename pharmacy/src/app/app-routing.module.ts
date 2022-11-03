import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'listar-productos',
    loadChildren: () => import('./productos/listar-productos/listar-productos.module').then( m => m.ListarProductosPageModule)
  },
  {
    path: 'agregar-productos',
    loadChildren: () => import('./productos/agregar-productos/agregar-productos.module').then( m => m.AgregarProductosPageModule)
  },
  {
    path: 'modificar-productos/:id',
    loadChildren: () => import('./productos/modificar-productos/modificar-productos.module').then( m => m.ModificarProductosPageModule)
  },
  {
    path: 'detalle-productos/:id',
    loadChildren: () => import('./productos/detalle-productos/detalle-productos.module').then( m => m.DetalleProductosPageModule)
  },
  {
    path: 'eliminar-productos/:id',
    loadChildren: () => import('./productos/eliminar-productos/eliminar-productos.module').then( m => m.EliminarProductosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
