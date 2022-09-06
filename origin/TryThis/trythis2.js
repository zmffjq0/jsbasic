const list = document.querySelector('.list');
const weekends = ['일', '월', '화', '수', '목', '금', '토'];

const inputBox = document.querySelector('.major');

const addBtn = document.querySelector('.addbutton');
const getNextWeek = ((e) => {
  let widx = -1;
  return () => {
    widx += 1;
    return weekends[widx % 7];
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
  if (e.target.className === 'addDay') {
    const id = e.target.id;
    const span = document.querySelector(`span#${id}`);
    span.innerText = getNextWeek(e);
  }
});

addBtn.addEventListener('click', (e) => {
  const value = inputBox.value;
  const div = createItem(value);
  list.appendChild(div);
});

function createItem(text) {
  const item = document.createElement('div');
  item.innerHTML = `
    <button class="addDay" , id=${getId()}>
      ${text} 수업 요일선택
    </button>
    <span id=${getId()}>
      요일을 선택하세요!
    </span>
  `;

  return item;
}
