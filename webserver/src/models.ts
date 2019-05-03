export class Item {
  constructor(
    public title: string,
    public description: string,
    public price: number,
    public path: string
  ) {}

  public static Equals(first: Item, second: Item): boolean {
    if ((!first && second) || (first && !second)) {
      return false;
    }

    return (
      first.path === second.path &&
      first.title === second.title &&
      first.description === second.description &&
      first.price === second.price
    );
  }
}

export class StoreItem implements Item {
  constructor(
    public title: string,
    public description: string,
    public price: number,
    public path: string
  ) {}

  public sold: boolean;
}
