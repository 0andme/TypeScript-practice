#### First Type Annotation

어떤 변수의 타입을 지정하는 것을 **Type Annotation**이라고 한다.

기본적으로 변수를 지정할때 타입을 따로 지정해주지 않으면 처음 지정한 그 값의 타입으로 알아서 지정된다.

#### 변수의 타입 지정하는 법

```ts
let value: type;
```

##### 예제

```ts
let userName = "hong";
// userName을 처음 선언했을 때 string으로 타입이 자동으로 설정된다.

userName = 39;
//userName에 타입 매치가 안된다는 경고가 뜬다.

let a;
// a에 커서를 올려보면 type에 any가 할당되어 있다.

let b: number;
// 타입을 선언해 줄 수 있다.
```

#### 함수 파라미터의 타입 지정

```ts
function name(params: type) {}
```
