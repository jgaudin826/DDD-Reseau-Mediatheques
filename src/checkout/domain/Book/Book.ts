import { AggregateRoot } from "../../../shared/AggregateRoot";
import type { Barcode } from "../../../shared/Barcode";

class Book extends AggregateRoot {
  constructor(public readonly barcode: Barcode) {
    super();
  }

    private BookProfilId : number = 0;

}