abstract class AggregateRoot<DomainEvent> {
  private readonly domainEvents: DomainEvent[] = [];

  protected record(event: DomainEvent): void {
    this.domainEvents.push(event);
  }

  events(): readonly DomainEvent[] {
    return Object.freeze([...this.domainEvents]);
  }

  pullEvents(): readonly DomainEvent[] {
    const pulled = Object.freeze([...this.domainEvents]);
    this.domainEvents.length = 0;
    return pulled;
  }
}

export = AggregateRoot;
