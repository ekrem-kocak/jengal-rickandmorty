export class GetCharecters {
  static readonly type = '[Charecter] Get Charecters';
  constructor() {}
}

export class GetCharecterById {
  static readonly type = '[Charecter] Get Charecter By Id';
  constructor(public id: string) {}
}
