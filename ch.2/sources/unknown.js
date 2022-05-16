"use strict";
//error:  unknown타입의 값을 number타입의 변수에넣을수 없음
// const aNum: number = maybe;
// 아래코드는 런타임일 때 타입가드가 된다.
if (maybe === true) {
    // if문을 만나면서
    // 타입가드가 되면서 maybe의 타입이 ture가 됨
    const aBool = maybe;
}
if (typeof maybe === "string") {
    // 타입가드가 되면서 maybe의 타입이 string이 됨
    const string = maybe;
}
