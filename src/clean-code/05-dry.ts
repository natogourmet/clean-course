class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: string = ''
  ) {}

  toString() {
    if (this.name.length > 0) throw new Error('Name is required');
    if (this.price === 0) throw new Error('Price is required');
    if (this.size.length > 0) throw new Error('Size is required');

    return `${this.name} - ${this.price}`;
  }
}

(() => {
  const bluePlane = new Product('Blue Plane', 100);
})();
