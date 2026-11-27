
export class Isbn {
  public readonly value: string;

  public constructor(value: string) {
    const normalizedValue = value.replace(/[\s-]/g, "").toUpperCase();

    if (!Isbn.isValid(normalizedValue)) {
      throw new TypeError("Invalid ISBN");
    }

    this.value = normalizedValue;
  }

  private static isValid(value: string): boolean {
    if (/^\d{9}[\dX]$/.test(value)) {
      let sum = 0;

      for (let index = 0; index < 9; index++) {
        sum += Number(value[index]) * (10 - index);
      }

      const checkDigit = (11 - (sum % 11)) % 11;
      const expected = checkDigit === 10 ? "X" : String(checkDigit);

      return value[9] === expected;
    }

    if (/^(978|979)\d{10}$/.test(value) && !value.startsWith("9790")) {
      let sum = 0;

      for (let index = 0; index < 12; index++) {
        sum += Number(value[index]) * (index % 2 === 0 ? 1 : 3);
      }

      return Number(value[12]) === (10 - (sum % 10)) % 10;
    }

    return false;
  }
}