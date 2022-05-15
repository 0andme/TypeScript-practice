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

any 타입은 계속해서 전파된다. 예를 들어 배열 데이터의 타입이 any이면 그 배열의 각 요소도 any타입을 갖는다. 객체 데이터가 any타입이면 객체. 으로 접근한 데이터도 any 타입을 갖는다.

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

##### Unknown

##### Never

##### Void

##### Enum
