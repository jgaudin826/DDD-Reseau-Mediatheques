import type BookProfileId from "./BookProfileId.ts";
import type { BookId } from "shared/BookId.ts";

class BookProfile {
    private BookProfileId: BookProfileId;
    private Title: string;
    private Author: string;
    private Isbn: string;
    private BookIds: BookId[];


    public constructor(BookProfileId: BookProfileId, Title: string, Author: string, Isbn: string, BookIds: BookId[]) {
        this.BookProfileId = BookProfileId;
        this.Title = Title;
        this.Author = Author;
        this.Isbn = Isbn;
        this.BookIds = BookIds;
    }

}