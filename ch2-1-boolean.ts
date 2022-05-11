let isDone: boolean = false;
isDone = true;
console.log(typeof isDone);

let isOk: Boolean = true;
isOk = false;
isOk = new Boolean(false);

// let isNotOk: boolean = new Boolean(true);
// 위의 코드는 타입 에러
// 래퍼 객체이기 때문에 기본 객체에 넣을 수 없다는 경고가 나온다.
