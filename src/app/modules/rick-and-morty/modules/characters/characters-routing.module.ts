import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { charactersResolver } from './resolvers/characters.resolver';
import { characterDetailsResolver } from './resolvers/character-details.resolver';
import { CharacterCardsComponent } from './components/character-cards/character-cards.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'character',
    pathMatch: 'full',
  },
  {
    path: 'character',
    component: CharacterCardsComponent,
    resolve: { charecters: charactersResolver },
  },
  {
    path: 'charecter/:id',
    component: CharacterDetailsComponent,
    resolve: { selectedCharecter: characterDetailsResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
