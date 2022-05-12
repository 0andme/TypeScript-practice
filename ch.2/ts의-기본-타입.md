#### js 와 ts의 차이점

ts는 스태틱타입이기 때문에 코드를 작성하면서 타입 에러를 알 수 있는 반면, js는 런타임때 타입 에러를 잡아낼 수 있다. 간단하게 ts는 코드를 작성할 때, js는 코드를 돌려봐야 안다는 것이다.

ts는 js의 타입 외에 추가적인 타입을 더 제공한다.

기본 자료형

- Boolean
- Number
- String
- Null
- Undefined
- Symbol
- Array object형

추가 자료형

- Any
- Void
- Never
- Unknown
- Enum
- Tuple

#### Primitive Types

- Boolean
- Number
- String
- Null
- Undefined
- Symbol

Primitive Types은 실제 값을 저장하는 자료형이다. 위의 자료형을 가지는 변수는 리터럴값으로 작성하거나 new 객체와 함께 만들 수 있는데 사실 new 객체로 만든 값의 타입을 출력해보면 object로 나온다. `typeof Number(42) : 'object'`

따라서 ts에서 Primitive Types의 타입을 지정할때 소문자로 작성해야한다. `Type Casing`

##### boolean

```ts
let isDone: boolean = false;
isDone = true;
console.log(typeof isDone);

let isOk: Boolean = true;
isOk = false;
isOk = new Boolean(false);

// let isNotOk: boolean = new Boolean(true);
// 위의 코드는 타입 에러
// 래퍼 객체이기 때문에 기본 객체에 넣을 수 없다는 경고가 나온다.
```

##### number

```ts
// 10진수
let decimal: number = 10;
//  16진수
let hex: number = 0xf00d;
// 2진수
let binary: number = 0b1010;
// 8진수
let octal: number = 0o744;
// NaN
let notANumber: number = NaN;
// _포함 숫자
let underscoreNum: number = 1_000_000;
```

##### string

```ts
// 기본적인 스트링
let myName: string = "name";

// 템플릿 문자열 - 백틱 기호도 사용할 수 있다.
let age: number = 7;
let templateString: string = `my name is ${myName} and age id ${age}`;
```

##### symbol

자료형 Symbol은 new Symbol의 형태로 새로운 객체를 생성하지 않고 Symbol()함수로 생성한다.

고유하고 수정불가능한 값으로 만들어주기 때문에 주로 접근을 제어하는데 쓰는 경우가 많다.

```ts
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
```

##### null & undefined

만약 따로 ts옵션을 지정하지 않는다면 다른 타입에 null이나 undefined를 할당할 수 있다는 의미가 된다. 만약 --strictNullChecks 옵션을 사용하면 null과 undefined는 각자 자신과 맞는 타입이나 void에만 할당할 수 있다.

```ts
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
```

#### object형

- Array

js에서의 object와 ts에서의 object은 조금 다른 의미를 갖는다.

Primitive Types가 아닌 것을 나타내고 싶을 때 사용하는 타입이다.

##### array

```ts
// 타입 지정방법 두가지
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
```

위의 방식을 더 권장하고 있다. jsx나 tsx에서의 충돌사례가 있다고.

```ts
// 배열 요소가 숫자와 문자 모두 가능할 때
// 괄호로 묶어야 함
let list: (number | string)[] = [1, 2, "3"];
```
