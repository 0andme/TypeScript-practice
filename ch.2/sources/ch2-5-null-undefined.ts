// strict mode일때 error
let str: string = undefined;
// void에는 undefined만 가능
let voidVal: void = undefined;
// void에는 null은 불가
voidVal = null;
// 아래는 error가 나지 않는 경우
let nullVal: null = null;
let undefinedVal: undefined = undefined;
//  strict mode에서 error가 안 나게 하려면
let strVal: string | undefined = undefined;
//런타임에서 null의 타입은 object이다.
console.log(typeof null); //출력결과 : object
console.log(typeof undefined); //출력결과 : undefined
