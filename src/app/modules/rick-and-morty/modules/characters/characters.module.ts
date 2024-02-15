import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { NgxsModule } from '@ngxs/store';
import { CharacterState } from './states/character.state';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterCardsComponent } from './components/character-cards/character-cards.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FilterAndSearchComponent } from './components/filter-and-search/filter-and-search.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CharacterCardComponent,
    CharacterCardsComponent,
    CharacterDetailsComponent,
    PaginationComponent,
    FilterAndSearchComponent,
  ],
  imports: [
    NgxsModule.forFeature([CharacterState]),
    CommonModule,
    CharactersRoutingModule,
    SharedModule,
  ],
})
export class CharactersModule {}
