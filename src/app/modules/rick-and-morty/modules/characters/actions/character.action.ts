import { Character } from '../models/character';

export class GetCharacters {
  static readonly type = '[Character] Get Characters';
  constructor() {}
}

export class GetCharactersWithPage {
  static readonly type = '[Character] Get Characters With Page';
  constructor(public page: number) {}
}

export class GetCharacterById {
  static readonly type = '[Character] Get Character By Id';
  constructor(public id: string) {}
}

export class FilterCharacters {
  static readonly type = '[Character] Filter Characters';
  constructor(public model: Character.FilterModel, public page: number = 1) {}
}
