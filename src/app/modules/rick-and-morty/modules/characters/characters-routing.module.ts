import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharecterCardsComponent } from './components/charecter-cards/charecter-cards.component';

const routes: Routes = [{ path: '', component: CharecterCardsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
