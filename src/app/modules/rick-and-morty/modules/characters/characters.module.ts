import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharecterCardComponent } from './components/charecter-card/charecter-card.component';
import { CharecterCardsComponent } from './components/charecter-cards/charecter-cards.component';
import { NgxsModule } from '@ngxs/store';
import { CharecterState } from './states/charecter.state';

@NgModule({
  declarations: [CharecterCardComponent, CharecterCardsComponent],
  imports: [
    NgxsModule.forFeature([CharecterState]),
    CommonModule,
    CharactersRoutingModule,
  ],
})
export class CharactersModule {}
