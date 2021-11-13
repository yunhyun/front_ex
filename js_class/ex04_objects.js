const user = {
  name: "name1",
  age: 10,
  email: "aa@aa.com",
};
const keys = Object.keys(user);
console.log(keys);

console.log(user["email"]);

const values = keys.map((key) => user[key]);
console.log(values);

// 구조분해 할당(destructuring assignment)

const { name, age, email, address } = user;
console.log(`사용자의 이름은 ${name}입니다.`);
console.log(`${name}의 나이는 ${age}세 입니다.`);
console.log(`${name}의 이메일 주ㅗ는 ${email}입니다.`);
console.log(address);

const fruits = ["Apple", "Banana", "Blueberry"];
const [a, b, c, d] = fruits;
console.log(a, b, c, d);
// 두번째것만
const [, e] = fruits;
console.log(e);
// 세번째것만
const [, , e] = fruits;
console.log(e);

// 전개연산자
console.log(...fruits);
// 아래 코드와 동일한 기능을 함.
// console.log("Apple", "Banana", "Blueberry");

// 전개 연산자를 이용하여 객체 데이터 넣기
function toObject(a, b, c) {
  return {
    a: a,
    b: b,
    c: c,
  };
}
console.log(toObject(...fruits));
// console.log(toObject(fruits[0], fruits[1], fruits[2])); // 위의 문장과 같은 역할을 함.

// 위를 화살표 함수로
const toObject1 = (a, b, c) => ({ a, b, c });
console.log(toObject1(...fruits));
