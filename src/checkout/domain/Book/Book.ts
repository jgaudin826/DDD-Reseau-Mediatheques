import { AggregateRoot } from "../../../shared/AggregateRoot";
import type { Barcode } from "../../../shared/Barcode";

class Book extends AggregateRoot {
    private barcode: Barcode;
    constructor(barcode: Barcode) {
        super();
        this.barcode = barcode;
    }

}