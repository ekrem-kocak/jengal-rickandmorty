import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { CharecterState } from '../../states/charecter.state';
import { Charecter } from '../../models/charecter';

@Component({
  selector: 'app-charecter-details',
  templateUrl: './charecter-details.component.html',
  styleUrls: ['./charecter-details.component.scss'],
})
export class CharecterDetailsComponent {
  @Select(CharecterState.getSelectedCharacter) selectedCharacter$:
    | Charecter.Model
    | undefined;
}
