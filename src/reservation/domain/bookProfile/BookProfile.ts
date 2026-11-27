import type BookProfileId from "./BookProfileId.ts";
import type { Barcode } from "shared/Barcode.js";

class BookProfile {
  private bookProfileId: BookProfileId;
  private title: string;
  private author: string;
  private isbn: string;
  private barcode: Barcode[];

  public constructor(
    bookProfileId: BookProfileId,
    title: string,
    author: string,
    isbn: string,
    barcode: Barcode[],
  ) {
    this.bookProfileId = bookProfileId;
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.barcode = barcode;
  }
  public equals(other: unknown): boolean {
        return other instanceof BookProfile && this.bookProfileId.value === other.bookProfileId.value;
    }

    public hashCode(): number {
        const value = this.bookProfileId.value;
        let hash = 0;

        for (let index = 0; index < value.length; index++) {
            hash = (Math.imul(hash, 31) + value.charCodeAt(index)) | 0;
        }

        return hash;
    }
}

