export class StudentId {
  constructor(public readonly value: string) {
    if (value == null) {
      throw new TypeError("value must not be null");
    }
  }

  static generate(): StudentId {
    return new StudentId(crypto.randomUUID());
  }
}