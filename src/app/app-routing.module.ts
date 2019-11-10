import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'categorias', loadChildren: './categorias/categorias.module#CategoriasPageModule' },
  { path: 'cat-abecedario', loadChildren: './cat-abecedario/cat-abecedario.module#CatAbecedarioPageModule' },
  { path: 'cat-animales', loadChildren: './cat-animales/cat-animales.module#CatAnimalesPageModule' },
  { path: 'cat-bebidas', loadChildren: './cat-bebidas/cat-bebidas.module#CatBebidasPageModule' },
  { path: 'cat-colores', loadChildren: './cat-colores/cat-colores.module#CatColoresPageModule' },
  { path: 'cat-comidas', loadChildren: './cat-comidas/cat-comidas.module#CatComidasPageModule' },
  { path: 'cat-departamentos', loadChildren: './cat-departamentos/cat-departamentos.module#CatDepartamentosPageModule' },
  { path: 'cat-emociones', loadChildren: './cat-emociones/cat-emociones.module#CatEmocionesPageModule' },
  { path: 'cat-familia', loadChildren: './cat-familia/cat-familia.module#CatFamiliaPageModule' },
  { path: 'cat-numeros', loadChildren: './cat-numeros/cat-numeros.module#CatNumerosPageModule' },
  { path: 'cat-saludos', loadChildren: './cat-saludos/cat-saludos.module#CatSaludosPageModule' },
  { path: 'letra-a', loadChildren: './letra-a/letra-a.module#LetraAPageModule' },
  { path: 'letra-b', loadChildren: './letra-b/letra-b.module#LetraBPageModule' },
  { path: 'letra-c', loadChildren: './letra-c/letra-c.module#LetraCPageModule' },
  { path: 'letra-ch', loadChildren: './letra-ch/letra-ch.module#LetraChPageModule' },
  { path: 'letra-d', loadChildren: './letra-d/letra-d.module#LetraDPageModule' },
  { path: 'letra-e', loadChildren: './letra-e/letra-e.module#LetraEPageModule' },
  { path: 'letra-f', loadChildren: './letra-f/letra-f.module#LetraFPageModule' },
  { path: 'letra-g', loadChildren: './letra-g/letra-g.module#LetraGPageModule' },
  { path: 'letra-h', loadChildren: './letra-h/letra-h.module#LetraHPageModule' },
  { path: 'letra-i', loadChildren: './letra-i/letra-i.module#LetraIPageModule' },
  { path: 'letra-j', loadChildren: './letra-j/letra-j.module#LetraJPageModule' },
  { path: 'letra-k', loadChildren: './letra-k/letra-k.module#LetraKPageModule' },
  { path: 'letra-l', loadChildren: './letra-l/letra-l.module#LetraLPageModule' },
  { path: 'letra-ll', loadChildren: './letra-ll/letra-ll.module#LetraLlPageModule' },
  { path: 'letra-m', loadChildren: './letra-m/letra-m.module#LetraMPageModule' },
  { path: 'letra-n', loadChildren: './letra-n/letra-n.module#LetraNPageModule' },
  { path: 'letra-n1', loadChildren: './letra-n1/letra-n1.module#LetraN1PageModule' },
  { path: 'letra-o', loadChildren: './letra-o/letra-o.module#LetraOPageModule' },
  { path: 'letra-p', loadChildren: './letra-p/letra-p.module#LetraPPageModule' },
  { path: 'letra-q', loadChildren: './letra-q/letra-q.module#LetraQPageModule' },
  { path: 'letra-r', loadChildren: './letra-r/letra-r.module#LetraRPageModule' },
  { path: 'letra-rr', loadChildren: './letra-rr/letra-rr.module#LetraRrPageModule' },
  { path: 'letra-s', loadChildren: './letra-s/letra-s.module#LetraSPageModule' },
  { path: 'letra-t', loadChildren: './letra-t/letra-t.module#LetraTPageModule' },
  { path: 'letra-u', loadChildren: './letra-u/letra-u.module#LetraUPageModule' },
  { path: 'letra-v', loadChildren: './letra-v/letra-v.module#LetraVPageModule' },
  { path: 'letra-w', loadChildren: './letra-w/letra-w.module#LetraWPageModule' },
  { path: 'letra-x', loadChildren: './letra-x/letra-x.module#LetraXPageModule' },
  { path: 'letra-y', loadChildren: './letra-y/letra-y.module#LetraYPageModule' },
  { path: 'letra-z', loadChildren: './letra-z/letra-z.module#LetraZPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
