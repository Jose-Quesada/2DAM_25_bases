import { Routes } from '@angular/router';
import { CounterPage } from './pages/counter/counter-page';
import { HeroPage } from './pages/hero/hero-page';
import { DragonballPages } from './pages/dragonball/dragonball-pages/dragonball-pages';

export const routes: Routes = [

  {
    path:'',
    component: CounterPage
  },
  {
  path: 'hero',
  component: HeroPage
  },
  {
    path:'dragonball',
    component: DragonballPages
  },
  {
    path:'**',
    redirectTo: ''
  },

];
