import type BookProfileId from "./BookProfileId.ts";
import type { Barcode } from "shared/Barcode.js";

class BookProfile {
  private BookProfileId: BookProfileId;
  private Title: string;
  private Author: string;
  private Isbn: string;
  private Barcode: Barcode;

  public constructor(
    BookProfileId: BookProfileId,
    Title: string,
    Author: string,
    Isbn: string,
    Barcode: Barcode,
  ) {
    this.BookProfileId = BookProfileId;
    this.Title = Title;
    this.Author = Author;
    this.Isbn = Isbn;
    this.Barcode = Barcode;
  }
}
