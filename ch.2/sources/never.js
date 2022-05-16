"use strict";
// 아무것도 리턴되지 않는 경우에만 never를 쓸수 있다.
function error(msg) {
    throw new Error(msg);
}
//fail 함수의 리턴 타입이 never라고 추론된다.
function fail() {
    return error("failed");
}
// 타입 실수를 막을 때 사용한다.
// if 문 안에서 aVal의 타입이 never로 할당된다.
let aVal = "hello";
if (typeof aVal != "string") {
    aVal;
}
