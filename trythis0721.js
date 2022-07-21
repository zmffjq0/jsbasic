const list = document.querySelector('.list');
const weekends = ['일', '월', '화', '수', '목', '금', '토'];
const inputBox = document.querySelector('.major');
const addBtn = document.querySelector('.addbutton');

const getNextWeek = (() => {
  const weekObj = {};
  return (idx, e) => {
    if (e.constructor.name === 'PointerEvent' && e.isTrusted === true) {
      if (weekObj[idx] === undefined || Number.isNaN(weekObj[idx])) {
        weekObj[idx] = -1;
      }
      weekObj[idx] += 1;
      return weekends[weekObj[idx] % 7];
    }
  };
})();

const getId = (() => {
  let id = -1;
  return () => {
    id += 1;
    return id;
  };
})();

function createItem(text) {
  const item = document.createElement('div');
  item.className = 'item';
  const id = getId();
  item.innerHTML = itemTemplate(id, text);
  return item;
}

function itemTemplate(id, text) {
  return `
    <button class="addDay" , id=list${id}>
      ${text} 수업 요일선택
    </button>
    <span id=list${id}>
      요일을 선택하세요!
    </span>
  `;
}

function addItem() {
  const value = inputBox.value;
  const div = createItem(value);
  list.appendChild(div);
}

function updateDay(e) {
  if (e.target.className === 'addDay') {
    const id = e.target.id;
    const span = document.querySelector(`span#${id}`);
    const idx = id.substr(4);
    span.innerText = getNextWeek(idx, e);
  }
}

list.addEventListener('click', (e) => {
  updateDay(e);
});

addBtn.addEventListener('click', () => {
  if (inputBox.value) {
    addItem();
  }
  inputBox.value = '';
  inputBox.focus();
});

inputBox.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && inputBox.value) {
    addItem();
    inputBox.value = '';
    inputBox.focus();
  }
});

/**
 * 1. 즉흥적
 * 2. DOM 전달
 * 3. 현재 값을 전달
 * 4. Object 관리 (과목 전달)
 * 5. Caller (호출한 함수)
 */

// **********************
// 인덱스를 나누기로 하면 내부 값은 무한히 증가해서 할당된 메모리를 초과할 여지가 있으므로, 인덱스 범위를 벗어나면 -1로 초기화해주자
//1. 단순한
// 순수함수이지만, 렉시컬 환경을 계속 생성
const getNextWeek1 = () => {
  let widx = -1;
  return () => {
    widx += 1;
    return weekends[widx % 7];
  };
};
// const 국어 = getNextWeek1();
// 국어()
// const 수학 = getNextWeek1();
// 수학();

// 함수를 여러번 호출하여 각각의 렉시컬 환경을 따로 동작하게 만듬
const fKor = getNextWeek1();
const fMath = getNextWeek1();

// **********************
//2. DOM 전달
// DOM에 따라 제약이 생긴다 ex input
const getNextWeek2 = (() => {
  return ($sp) => {
    const curr = $sp.innerText.trim();
    const currIdx = weekends.indexOf(curr);
    $sp.innerText = weekends[(currIdx + 1) % 7];
  };
})();

// **********************

//3. 현재 값을 전달
const getNextWeek3 = () => {
  return (curr) => {
    const currIdx = weekends.indexOf(curr);
    return weekends[(currIdx + 1) % 7];
  };
};

// **********************

//4. Object 관리
const getNextWeek4 = () => {
  const idxObj = {};
  return (sbj) => {
    if (!idxObj.hasOwnProperty(sbj)) {
      idxObj[sbj] = -1;
    } else {
      idxObj[sbj] += 1;
    }
    return weekends[idxObj[sbj] % 7];
  };
};

// **********************

//5. caller 사용

// function f() {
//   console.dir(f);
//   console.log('::>>', f.name, arguments, f.caller);
// }

// function outer() {
//   f(1, 2, 3);
// }
// outer();

//caller 자체를 부르는 함수는 화살표함수가 아니어야 하지만 caller를 호출하는 함수를 호출하는 함수는 상관없다
const getNextWeek5 = function () {
  const sbj = getNextWeek5.caller.name;
};

// **********************
