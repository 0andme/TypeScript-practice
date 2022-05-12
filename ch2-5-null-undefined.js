"use strict";
// strict mode일때 error
// let str: string = undefined;
// void에는 undefined만 가능
let str22 = undefined;
// void에는 null은 불가
// let str33: void = null;
// 아래는 error가 나지 않는 경우
let nullVal = null;
let undefinedVal = undefined;
//  strict mode에서 error가 안 나게 하려면
let strVal = undefined;
console.log(typeof null); //출력결과 : object
console.log(typeof undefined); //출력결과 : undefined
