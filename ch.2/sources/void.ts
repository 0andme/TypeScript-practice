// void로 추론되는 경우
// 1. return을 안 하는 경우
function returnVoid(msg: string) {
  console.log(msg);
}

// 2. return 값이 없을 때 경우
function returnVoid2(msg: string): void {
  console.log(msg);
  return;
}

// returnVal와 returnVal2의 타입은 void
const returnVal = returnVoid("msg");
const returnVal2 = returnVoid2("msg");
