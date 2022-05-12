"use strict";
const msg = returnAny("리턴");
// 아래 코드는 타입에러가 뜨지 않음
// 어떤 것이든 할 수 있는 any  타입이기 때문에
// 그래서 조심해서 써야하는 any
msg.toString();
// msg가 암묵적으로 any로 지정되긴 했지만
// error표시가 난다.
function returnAny(msg) {
    console.log(msg);
}
// 함수의 파라미터로 들어올 수 있는 값이
// 숫자든 문자열이든 상관없을 때는
// 함수 인수에 any를 적어도 무방
function returnAny2(msg) {
    console.log(msg);
}
