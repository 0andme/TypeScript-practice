"use strict";
console.log(Symbol("test") === Symbol("test"));
// 출력 결과 : false
const sym = Symbol();
const obj = {
    [sym]: "data",
};
console.log(obj[sym]);
// obj의 sym에 접근하기 위해서는
// sym으로만 접근가능하다.
// 따라서 Symbol은 위처럼 접근을 제어할 때 주로 사용된다.
