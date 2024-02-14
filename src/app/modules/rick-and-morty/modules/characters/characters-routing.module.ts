import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharecterCardsComponent } from './components/charecter-cards/charecter-cards.component';
import { charectersResolver } from './resolvers/charecters.resolver';
import { CharecterDetailsComponent } from './components/charecter-details/charecter-details.component';
import { charecterDetailsResolver } from './resolvers/charecter-details.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'character',
    pathMatch: 'full',
  },
  {
    path: 'character',
    component: CharecterCardsComponent,
    resolve: { charecters: charectersResolver },
  },
  {
    path: 'charecter/:id',
    component: CharecterDetailsComponent,
    resolve: { selectedCharecter: charecterDetailsResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
