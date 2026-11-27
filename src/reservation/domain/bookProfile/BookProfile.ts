import type BookProfileId from "./BookProfileId.ts";
import type { Barcode } from "shared/Barcode.js";
import type { Isbn } from "./Isbn.js";

class BookProfile {
    private bookProfileId: BookProfileId;
    private title: string;
    private author: string;
    private isbn: Isbn|null;
    private publishedIn: Date;
    private borrowedBooks: Barcode[];
    private availableBooks: Barcode[];

    public constructor(
        bookProfileId: BookProfileId,
        title: string,
        author: string,
        isbn: Isbn|null,
        borrowedBooks: Barcode[],
        availableBooks: Barcode[],
        publishedIn: Date,
    ) {
        this.bookProfileId = bookProfileId;
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.publishedIn = publishedIn;
        this.availableBooks = availableBooks;
        this.borrowedBooks = borrowedBooks;
    }

    public BorrowingBook(barcode: Barcode): void {
        const index = this.availableBooks.findIndex((b) => b.equals(barcode));
        if (index !== -1) {
            this.availableBooks.splice(index, 1);
            this.borrowedBooks.push(barcode);
        } else {
            throw new Error("Book not available for borrowing");
        }
    }
    
    public ReturningBook(barcode: Barcode): void {
        const index = this.borrowedBooks.findIndex((b) => b.equals(barcode));
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
            this.availableBooks.push(barcode);
        } else {
            throw new Error("Book already returned or not borrowed from this profile");
        }
    }



    /*public hashCode(): number {
        const value = this.bookProfileId.value;
        let hash = 0;

        for (let index = 0; index < value.length; index++) {
            hash = (Math.imul(hash, 31) + value.charCodeAt(index)) | 0;
        }

        return hash;
    }*/
}

