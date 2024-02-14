import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RickAndMortyComponent } from './rick-and-morty.component';

const routes: Routes = [
  {
    path: '',
    component: RickAndMortyComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/characters/characters.module').then(
            (m) => m.CharactersModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RickAndMortyRoutingModule {}
