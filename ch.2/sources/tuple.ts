let x: [number, string] = [1, "and"];

// 순서와 자료형 모두 맞아야 한다
x = [1, "name"];
// error : 순서와 자료형이 틀림
// x = ["name", 1];
// error: x는 길이가 2인 값인데 3번째 자리 값을 지정하려고 해서
// x[2] = "name";

const data: [string, number] = ["name", 1];
// error: 마찬가지로 구조 분해 할당시 없는 값에 접근하려고 해서
// const [data1, data2, data3] = data;
