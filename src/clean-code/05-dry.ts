class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: string = ''
  ) {}

  isProductValid(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if ((<string><unknown>this[key]).length === 0) return false;
          break;
        case 'number':
          if ((<number><unknown>this[key]) <= 0) return false;
          break;
        default:
          throw new Error('Invalid type');
          break;
      }
    }
    return true;
  }

  toString() {
    if (!this.isProductValid()) return;

    return `Product: ${this.name} - Price: ${this.price} - Size: ${this.size}`;
  }
}

(() => {
  const bluePlane = new Product('Blue Plane', 100);
  bluePlane.toString();
})();
