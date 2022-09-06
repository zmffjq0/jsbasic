const list = document.querySelector('.list');
const weekends = ['일', '월', '화', '수', '목', '금', '토'];
const getNextWeek = ((e) => {
  let widx = -1;
  return () => {
    widx += 1;
    return weekends[widx % 7];
  };
})();
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const id = e.target.id;
    const span = document.querySelector(`span#${id}`);
    span.innerText = getNextWeek(e);
  }
});
