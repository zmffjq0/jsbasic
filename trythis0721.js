const list = document.querySelector('.list');
const weekends = ['일', '월', '화', '수', '목', '금', '토'];
const inputBox = document.querySelector('.major');
const addBtn = document.querySelector('.addbutton');

const getNextWeek = (() => {
  let weekObj = {};
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

list.addEventListener('click', (e) => {
  updateDay(e);
});

addBtn.addEventListener('click', (e) => {
  addItem();
});

function createItem(text) {
  const item = document.createElement('div');
  item.className = 'item';
  const id = getId();
  item.innerHTML = itemTemplate(id, text);

  return item;
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
