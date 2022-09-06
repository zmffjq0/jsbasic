const obj = {
  name: 'ObjName',
  bark() {
    //Good!
    console.log('bark=', this.name);
  },
  bark2: () => {
    //Bad!
    console.log('bark2=', obj.name);
  },
};

/**
 * 함수 선언식의 this는 함수를 소유한 객체를 의미한다.
 * 함수 표현식의 this는 상위 스코프를 의미한다.
 */

obj.bark();
obj.bark2();

//this => global상태
const declareFn = function(name) {
  // if, 'use strict'?
  this.name = name;
  console.log('declareFn = ', this, new.target, this.name, name);
}


// arrow function에서 new키워드는 사용할 수 없다
// 하나의 오브젝터 변수라 생각하자(함수랑은 조금 다른 느낌)
const arrowFn = (name) => {
  this.name = name;
  console.log('arrowFn = ', this, new.target, this.name, name);
}

declareFn('dfn');
arrowFn('afn');

// const dfn = new declareFn('D');
// const afn = arrowFn('A');

/**
 * ***** 화살표 함수와 일반 함수의 차이 ******
 * 1. 일반함수
 * a. 함수 실행시에는 전역(window) 객체를 가리킨다
 * b. 메소드 실행시에는 메소드를 소유하고 있는 객체를 가리킨다.
 * c. 생성자 실행시에는 새롭게 만들어진 객체를 가리킨다.
 * d. 일반 함수는 함수를 선언할 때 바인딩할 객체가 정적으로 결정되는 것이 아니고, 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩 할 객체가 동적으로 결정된다.
 * 
 * 2. 화살표 함수
 * 화살표 함수는 선언할 때 this에 바인딩 할 객체가 정적으로 결정된다.
 * 화살표 함수의 this는 언제나 상위 스코프의 this를 가리킨다. (Lexical This) 또한, call apply bind 메소드를 사용하여 this를 변경할 수 없다.
 * 또한 call, apply, bind 메소드를 사용하여 this를 변경할 수 없다.
 * :: 일반 함수는 자신이 종속된 객체를 this로 가리키고, 화살표 함수는 자신이 종속된 인스턴스를 가리킨다.
 * 
 * 
 * ***** 생성자 함수로 사용 가능 여부 *****
 * 일반 함수는 생성자 함수로 사용할 수 있다.
 * 화살표 함수는 생성자 함수로 사용할 수 없다. prototype 프로퍼티를 가지고 있지 않기 때문이다.
 * 
 * ***** arguments 사용 가능 여부 *****
 * 일반 함수에서는 함수가 실행 될 때 암묵적으로 arguments 변수가 전달되어 사용할 수 있다.
 * 화살표 함수에서는 arguments 변수가 전달되지 않는다.
 * 
 * 
 */

const Cat = (name) => {
    this.name = name;
    this.barkcat = function () {
        console.log("barkCat");
    }
    this.barkcat2 = () => {
        console.log("barkCat2");
    }
    return this;
}

Cat().barkcat();
Cat().barkcat2();

const obja = {
    name: 'ObjName',
    bark1() {
        console.log('1=', this.name);
        const self = this;
        setTimeout(function () {
            console.log('111=', self.name);
        }, 1000);
        console.log('xxxx');
    },
    bark2() {
        console.log('2=', this.name);
        setTimeout(() => {
            console.log('2222=', this.name);
        }, 1000)
        console.log('yyyy');
    }
}

document.getEle

obja.bark1();
obja.bark2();
