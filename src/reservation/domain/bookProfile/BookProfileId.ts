
class BookProfileId {
    public constructor(public readonly value: string) {
        if (value == null) {
            throw new TypeError("BookProfileId value cannot be null");
        }
    }

    public static generate(): BookProfileId {
        return new BookProfileId(crypto.randomUUID());
    }
}

export default BookProfileId;
