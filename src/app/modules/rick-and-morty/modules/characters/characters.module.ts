import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { NgxsModule } from '@ngxs/store';
import { CharacterState } from './states/character.state';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterCardsComponent } from './components/character-cards/character-cards.component';

@NgModule({
  declarations: [
    CharacterCardComponent,
    CharacterCardsComponent,
    CharacterDetailsComponent,
  ],
  imports: [
    NgxsModule.forFeature([CharacterState]),
    CommonModule,
    CharactersRoutingModule,
  ],
})
export class CharactersModule {}
