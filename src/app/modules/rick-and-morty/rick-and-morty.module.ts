import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickAndMortyRoutingModule } from './rick-and-morty-routing.module';
import { RickAndMortyComponent } from './rick-and-morty.component';
import { SidebarModule } from './modules/sidebar/sidebar.module';

@NgModule({
  declarations: [RickAndMortyComponent],
  imports: [CommonModule, RickAndMortyRoutingModule, SidebarModule],
})
export class RickAndMortyModule {}
