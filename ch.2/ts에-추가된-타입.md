#### 타입스크립트에 추가된 타입

- Any
- Void
- Never
- Unknown
- Enum
- Tuple

##### Tuple

```ts
let x: [number, string] = [1, "and"];

// 순서와 자료형 모두 맞아야 한다
x = [1, "name"];
// error : 순서와 자료형이 틀림
x = ["name", 1];
// error: x는 길이가 2인 값인데 3번째 자리 값을 지정하려고 해서
x[2] = "name";

const data: [string, number] = ["name", 1];
// error: 마찬가지로 구조 분해 할당시 없는 값에 접근하려고 해서
const [data1, data2, data3] = data;
```

##### Any

any는 어떤 타입이어도 상관없는 타입이라는 의미이므로 최대한 안 쓰는게 핵심이다. ts 옵션 중에 `noImplicitAny`옵션을 true로 설정하면 any를 작성하지 않으면 오류표시가 난다.

```ts
const msg = returnAny("리턴");

// 아래 코드는 타입에러가 뜨지 않음
// 어떤 것이든 할 수 있는 any  타입이기 때문에
// 그래서 조심해서 써야하는 any
msg.toString();

// msg가 암묵적으로 any로 지정되긴 했지만
// error표시가 난다.
function returnAny(msg): any {
  console.log(msg);
}
// 함수의 파라미터로 들어올 수 있는 값이
// 숫자든 문자열이든 상관없을 때는
// 함수 인수에 any를 적어도 무방
function returnAny2(msg: any): any {
  console.log(msg);
}
```

any 타입은 계속해서 전파된다. 예를 들어 배열 데이터의 타입이 any이면 그 배열의 각 요소도 any타입을 갖는다. 객체 데이터가 any타입이면 객체. 으로 접근한 데이터도 any 타입을 갖는다.

```ts
const arr: any = [1, 2, 3];
const [a, b, c] = arr;
// a b c에 커서를 올리면 type이 any라고 뜬다.
const obj: any = {};
const test = obj.a;
// test의 타입도 any
```

##### Unknown

any가 가지는 불안정한 타입을 커버하기 위한 타입. 모르는 변수의 타입을 묘사해야하는 경우도 있다. 모든 값을 의도적으로 받아야할 때 쓰는 타입

any보다 늦게나온 타입이다. any타입보다는 type-safe한 타입. 컴파일러가 타입을 추론할 수 있게 해주거나 타입을 확정해주지 않으면 다른 곳에 할당할 수 없다. 그러나 데이터의 유형을 검사해야하는 경우엔 유용하다.

```ts
declare const maybe: unknown;

//error:  unknown타입의 값을 number타입의 변수에넣을수 없음
// const aNum: number = maybe;

// 아래코드는 런타임일 때 타입가드가 된다.
if (maybe === true) {
  // if문을 만나면서
  // 타입가드가 되면서 maybe의 타입이 ture가 됨
  const aBool: boolean = maybe;
}

if (typeof maybe === "string") {
  // 타입가드가 되면서 maybe의 타입이 string이 됨
  const string: string = maybe;
}
```

##### Never

주로 리턴에 사용된다. 아무것도 리턴되지 않는 다는 의미.

never은 모든 타입의 서브타입이므로 모든 타입에 할당할 수 있다. 그러나 반대로, never에는 어떤 것도 할당할 수 없다. any조차도 never에 할당 할 수 없다.

```ts
// 아무것도 리턴되지 않는 경우에만 never를 쓸수 있다.
function error(msg: string): never {
  throw new Error(msg);
}

//fail 함수의 리턴 타입이 never라고 추론된다.
function fail() {
  return error("failed");
}

// 타입 실수를 막을 때 사용한다.
// if 문 안에서 aVal의 타입이 never로 할당된다.
let aVal: string = "hello";

if (typeof aVal != "string") {
  aVal;
}
```

##### Void

void로 지정한다는 의미는 그 리턴된 값으로 아무것도 하지 않겠다고 명시하려는 용도.

함수의 리턴값을 void로 추론하는 경우는

1. return 문이 아예 없을 경우
2. return ; 만 작성한 경우

리턴타입을 void로 지정한 후 returun undefined를 하는 경우 타입에러 없음

```ts
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
```
