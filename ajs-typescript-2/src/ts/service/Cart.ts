import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  sumWithoutDiscount(): number {
    return this.items.reduce((acc, prevValue) => acc + prevValue.price, 0)
  }

  sumWithDiscount(discount: number): number {
    const sumWithoutDiscount = this.items.reduce((acc, prevValue) => acc + prevValue.price, 0);
    return sumWithoutDiscount - sumWithoutDiscount * discount / 100;
  }

  deleteItem(id: number): void {
    const idx = this.items.findIndex((item) => item.id === id);
    this._items.splice(idx, 1)
  }
}
