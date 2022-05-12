"use strict";
const user = {
    name: "hong",
    age: 7,
};
// user에 커서를 대면 타입에 object가 아닌 아래와 같이 나오게 된다.
// const user: {
//   name: string;
//   age: number;
// }
const user2 = Object.create({ name: "hong", age: 7 });
// Object.create에 커서를 대면 아래와 같이 나온다.
// ObjectConstructor.create(o: object | null): any
let objVal = {};
objVal = { name: "hong" };
objVal = [1, 2, 3];
// 아래 코드는 전부 타입 에러 발생
// objVal = 37;
// objVal = "hong";
// objVal = true;
// objVal = Symbol();
// objVal = null;
// objVal = undefined;
