export class BookId {
  constructor(public readonly value: string) {
    if (value == null) {
      throw new TypeError("value must not be null");
    }
  }

  static generate(): BookId {
    return new BookId(crypto.randomUUID());
  }
}