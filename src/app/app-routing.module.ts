import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuard]},
  { path: 'categorias', loadChildren: './categorias/categorias.module#CategoriasPageModule', },
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
  { path: 'num1', loadChildren: './num1/num1.module#Num1PageModule' },
  { path: 'num2', loadChildren: './num2/num2.module#Num2PageModule' },
  { path: 'num3', loadChildren: './num3/num3.module#Num3PageModule' },
  { path: 'num4', loadChildren: './num4/num4.module#Num4PageModule' },
  { path: 'num5', loadChildren: './num5/num5.module#Num5PageModule' },
  { path: 'num6', loadChildren: './num6/num6.module#Num6PageModule' },
  { path: 'num7', loadChildren: './num7/num7.module#Num7PageModule' },
  { path: 'num8', loadChildren: './num8/num8.module#Num8PageModule' },
  { path: 'num9', loadChildren: './num9/num9.module#Num9PageModule' },
  { path: 'num10', loadChildren: './num10/num10.module#Num10PageModule' },
  { path: 'num11', loadChildren: './num11/num11.module#Num11PageModule' },
  { path: 'num12', loadChildren: './num12/num12.module#Num12PageModule' },
  { path: 'num', loadChildren: './num/num.module#NumPageModule' },
  { path: 'num13', loadChildren: './num13/num13.module#Num13PageModule' },
  { path: 'num14', loadChildren: './num14/num14.module#Num14PageModule' },
  { path: 'num15', loadChildren: './num15/num15.module#Num15PageModule' },
  { path: 'num16', loadChildren: './num16/num16.module#Num16PageModule' },
  { path: 'num17', loadChildren: './num17/num17.module#Num17PageModule' },
  { path: 'num18', loadChildren: './num18/num18.module#Num18PageModule' },
  { path: 'num19', loadChildren: './num19/num19.module#Num19PageModule' },
  { path: 'num20', loadChildren: './num20/num20.module#Num20PageModule' },
  { path: 'ani-ardilla', loadChildren: './ani-ardilla/ani-ardilla.module#AniArdillaPageModule' },
  { path: 'ani-caballo', loadChildren: './ani-caballo/ani-caballo.module#AniCaballoPageModule' },
  { path: 'ani-cerdo', loadChildren: './ani-cerdo/ani-cerdo.module#AniCerdoPageModule' },
  { path: 'ani-conejo', loadChildren: './ani-conejo/ani-conejo.module#AniConejoPageModule' },
  { path: 'ani-gallina', loadChildren: './ani-gallina/ani-gallina.module#AniGallinaPageModule' },
  { path: 'ani-gallo', loadChildren: './ani-gallo/ani-gallo.module#AniGalloPageModule' },
  { path: 'ani-gato', loadChildren: './ani-gato/ani-gato.module#AniGatoPageModule' },
  { path: 'ani-mono', loadChildren: './ani-mono/ani-mono.module#AniMonoPageModule' },
  { path: 'ani-perro', loadChildren: './ani-perro/ani-perro.module#AniPerroPageModule' },
  { path: 'ani-vaca', loadChildren: './ani-vaca/ani-vaca.module#AniVacaPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },  { path: 'beb-cacao', loadChildren: './beb-cacao/beb-cacao.module#BebCacaoPageModule' },
  { path: 'beb-chicha', loadChildren: './beb-chicha/beb-chicha.module#BebChichaPageModule' },
  { path: 'beb-linaza', loadChildren: './beb-linaza/beb-linaza.module#BebLinazaPageModule' },
  { path: 'beb-pinolillo', loadChildren: './beb-pinolillo/beb-pinolillo.module#BebPinolilloPageModule' },
  { path: 'beb-pinol', loadChildren: './beb-pinol/beb-pinol.module#BebPinolPageModule' },
  { path: 'beb-pozol', loadChildren: './beb-pozol/beb-pozol.module#BebPozolPageModule' },
  { path: 'beb-tibio', loadChildren: './beb-tibio/beb-tibio.module#BebTibioPageModule' },
  { path: 'beb-tiste', loadChildren: './beb-tiste/beb-tiste.module#BebTistePageModule' },
  { path: 'beb-chia', loadChildren: './beb-chia/beb-chia.module#BebChiaPageModule' },
  { path: 'beb-jengibre', loadChildren: './beb-jengibre/beb-jengibre.module#BebJengibrePageModule' },
  { path: 'beb-semjicaro', loadChildren: './beb-semjicaro/beb-semjicaro.module#BebSemjicaroPageModule' },
  { path: 'com-baho', loadChildren: './com-baho/com-baho.module#ComBahoPageModule' },
  { path: 'com-asado', loadChildren: './com-asado/com-asado.module#ComAsadoPageModule' },
  { path: 'com-chanyuca', loadChildren: './com-chanyuca/com-chanyuca.module#ComChanyucaPageModule' },
  { path: 'com-gallopinto', loadChildren: './com-gallopinto/com-gallopinto.module#ComGallopintoPageModule' },
  { path: 'com-indioviejo', loadChildren: './com-indioviejo/com-indioviejo.module#ComIndioviejoPageModule' },
  { path: 'com-nacatamal', loadChildren: './com-nacatamal/com-nacatamal.module#ComNacatamalPageModule' },
  { path: 'com-quesillo', loadChildren: './com-quesillo/com-quesillo.module#ComQuesilloPageModule' },
  { path: 'com-rondon', loadChildren: './com-rondon/com-rondon.module#ComRondonPageModule' },
  { path: 'com-sopamond', loadChildren: './com-sopamond/com-sopamond.module#ComSopamondPageModule' },
  { path: 'com-vigoron', loadChildren: './com-vigoron/com-vigoron.module#ComVigoronPageModule' },
  { path: 'dep-boaco', loadChildren: './dep-boaco/dep-boaco.module#DepBoacoPageModule' },
  { path: 'dep-carazo', loadChildren: './dep-carazo/dep-carazo.module#DepCarazoPageModule' },
  { path: 'dep-chinandega', loadChildren: './dep-chinandega/dep-chinandega.module#DepChinandegaPageModule' },
  { path: 'dep-chontales', loadChildren: './dep-chontales/dep-chontales.module#DepChontalesPageModule' },
  { path: 'dep-esteli', loadChildren: './dep-esteli/dep-esteli.module#DepEsteliPageModule' },
  { path: 'dep-granada', loadChildren: './dep-granada/dep-granada.module#DepGranadaPageModule' },
  { path: 'dep-jinotega', loadChildren: './dep-jinotega/dep-jinotega.module#DepJinotegaPageModule' },
  { path: 'dep-leon', loadChildren: './dep-leon/dep-leon.module#DepLeonPageModule' },
  { path: 'dep-madriz', loadChildren: './dep-madriz/dep-madriz.module#DepMadrizPageModule' },
  { path: 'dep-managua', loadChildren: './dep-managua/dep-managua.module#DepManaguaPageModule' },
  { path: 'dep-masaya', loadChildren: './dep-masaya/dep-masaya.module#DepMasayaPageModule' },
  { path: 'dep-matagalpa', loadChildren: './dep-matagalpa/dep-matagalpa.module#DepMatagalpaPageModule' },
  { path: 'dep-nuevaseg', loadChildren: './dep-nuevaseg/dep-nuevaseg.module#DepNuevasegPageModule' },
  { path: 'dep-raccn', loadChildren: './dep-raccn/dep-raccn.module#DepRaccnPageModule' },
  { path: 'dep-raccs', loadChildren: './dep-raccs/dep-raccs.module#DepRaccsPageModule' },
  { path: 'dep-riojuan', loadChildren: './dep-riojuan/dep-riojuan.module#DepRiojuanPageModule' },
  { path: 'dep-rivas', loadChildren: './dep-rivas/dep-rivas.module#DepRivasPageModule' },
  { path: 'emo-amistoso', loadChildren: './emo-amistoso/emo-amistoso.module#EmoAmistosoPageModule' },
  { path: 'emo-cansado', loadChildren: './emo-cansado/emo-cansado.module#EmoCansadoPageModule' },
  { path: 'emo-confundido', loadChildren: './emo-confundido/emo-confundido.module#EmoConfundidoPageModule' },
  { path: 'emo-conmocionado', loadChildren: './emo-conmocionado/emo-conmocionado.module#EmoConmocionadoPageModule' },
  { path: 'emo-enamorado', loadChildren: './emo-enamorado/emo-enamorado.module#EmoEnamoradoPageModule' },
  { path: 'emo-enojado', loadChildren: './emo-enojado/emo-enojado.module#EmoEnojadoPageModule' },
  { path: 'emo-feliz', loadChildren: './emo-feliz/emo-feliz.module#EmoFelizPageModule' },
  { path: 'emo-llorando', loadChildren: './emo-llorando/emo-llorando.module#EmoLlorandoPageModule' },
  { path: 'emo-triste', loadChildren: './emo-triste/emo-triste.module#EmoTristePageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
