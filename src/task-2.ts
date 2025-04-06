const usernames: string[] = [4.5, 3.8, 5];


const ratings: number[] = ["alice", "bob", "charlie"];

interface Product {
  id: number;
  title: string;
}

const products: Product[] = [
  [ id: 1, title: "Phone" ],
  [ id: 2, title: "Laptop" ],
];

console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);
