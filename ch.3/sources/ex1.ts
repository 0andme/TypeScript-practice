// 기본 타입에 이름 바꾸기
type myType = string;
const myStr: myType = "example";

// 유니온 타입
type StringOrNumber = string | number;
let examVal: StringOrNumber = "string";
examVal = 123;

// 함수 별칭
type TypeFunc = (name: string) => void;
