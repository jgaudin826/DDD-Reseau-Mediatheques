import { randomInt } from "node:crypto";

export class Barcode {
  constructor(public readonly value: string) {
    if (value == null) {
      throw new TypeError("value must not be null");
    }
    if (!Barcode.isValid(value)) {
      throw new TypeError("value must be a valid EAN-13 barcode");
    }
    Object.freeze(this);
  }

  static generate(): Barcode {
    const firstTwelveDigits = randomInt(0, 1_000_000_000_000)
      .toString()
      .padStart(12, "0");

    return new Barcode(`${firstTwelveDigits}${Barcode.checkDigit(firstTwelveDigits)}`);
  }

  equals(other: Barcode): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }

  private static isValid(value: string): boolean {
    return /^\d{13}$/.test(value) && Barcode.checkDigit(value.slice(0, 12)) === Number(value[12]);
  }

  private static checkDigit(firstTwelveDigits: string): number {
    let sum = 0;
    for (let index = 0; index < firstTwelveDigits.length; index++) {
      const weight = index % 2 === 0 ? 1 : 3;
      sum += Number(firstTwelveDigits[index]) * weight;
    }
    return (10 - (sum % 10)) % 10;
  }
}
