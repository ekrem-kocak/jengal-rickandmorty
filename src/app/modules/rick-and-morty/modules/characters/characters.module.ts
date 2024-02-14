import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharecterCardComponent } from './components/charecter-card/charecter-card.component';
import { CharecterCardsComponent } from './components/charecter-cards/charecter-cards.component';


@NgModule({
  declarations: [
    CharecterCardComponent,
    CharecterCardsComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
