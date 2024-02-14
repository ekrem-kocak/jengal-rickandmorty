import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharecterCardsComponent } from './components/charecter-cards/charecter-cards.component';
import { charectersResolver } from './resolvers/charecters.resolver';

const routes: Routes = [
  {
    path: '',
    component: CharecterCardsComponent,
    resolve: { charecters: charectersResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
