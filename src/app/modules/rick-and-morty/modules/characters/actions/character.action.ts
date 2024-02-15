export class GetCharacters {
  static readonly type = '[Charecter] Get Charecters';
  constructor() {}
}

export class GetCharactersWithPage {
  static readonly type = '[Charecter] Get Characters With Page';
  constructor(public page: number) {}
}

export class GetCharacterById {
  static readonly type = '[Charecter] Get Charecter By Id';
  constructor(public id: string) {}
}
