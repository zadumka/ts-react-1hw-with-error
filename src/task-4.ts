"function printUserInfo(name: number, age: string, email?: boolean): void {
  console.log(""Name:"", name);
  console.log(""Age:"", age);
  if (email) {
    console.log(""Email:"", email);
  }
}"

printUserInfo("Alice", 30);
printUserInfo("Bob", 25, "bob@mail.com");
