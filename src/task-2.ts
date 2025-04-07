const product: Product = {
  id: "1",
  title: "Tablet",
  description: true,
};

interface Product {
  readonly id: number;
  title: string;
  description?: string;
}

console.log(`Product: ${JSON.stringify(product)}`);
