export class GetCharacters {
  static readonly type = '[Charecter] Get Charecters';
  constructor() {}
}

export class GetCharacterById {
  static readonly type = '[Charecter] Get Charecter By Id';
  constructor(public id: string) {}
}
