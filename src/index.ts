"use strict";
const a = 3;
type ABC = "a" | "b" | "c" ;
const b: Record<ABC, number>= {
    a: 1,
    b: 2,
    c: 3,
};

interface TestObject {
    a: number;
    b: number;
    c: number;
}

const c: Omit<TestObject, "b"> = {
    a: 1,
    c: 12312313,
};
console.log(c); 

//----------------

c.a = 12312313;
console.log(c);
//--------------------

interface TT {
    d?: number;
    e?: number;
}

const d: TT = {
    d: 3,
};

//---------------------

const func = (a?: unknown | undefined | null): unknown => {
    if (typeof a === "string"){
        console.log("문자열");
    }
    if (typeof a === "number"){
        console.log("숫자");
    }
    console.log(a);
    return a;
};
func("adf");

//-----------------------
//<T>키워드를 통해 (제네릭이라고 부름) 함수에서 쓰이는 타입을 사용자가 결정할 수 있다.
//무조건 string을 상속받는 타입만 제네릭으로 넘겨줄 수 있음
const func2 = <T /*extends string*/>(a: T)/*:T*/ => {
    console.log(a);
}

func2<string>("1");  //<>생략 가능

//----------
interface GenObject<AA> {
    readonly name: string;
    readonly about: AA;
}

const e: GenObject<boolean> = {
    name: "이름",
    about: false,
}

//------------------

const f: string[] = ["A", "B", "C"];

const g: Array<GenObject<boolean>> = [
    {
        name: "asd",
        about: true,
    },
    {
        name: "dafas",
        about: true,
    },
    {
        name: "asdfasfasd",
        about: false,
    },
];