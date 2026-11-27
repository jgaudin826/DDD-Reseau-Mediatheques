import type { DomainEvent } from "./DomainEvent.js";


export abstract class AggregateRoot {
  readonly #events: DomainEvent[] = [];

  protected record(event: DomainEvent): void {
    this.#events.push(event);
  }
  events(): readonly DomainEvent[] {
    return [...this.#events];
  }

  pullEvents(): readonly DomainEvent[] {
    const pulled = [...this.#events];
    this.#events.length = 0;
    return pulled;
  }
}
