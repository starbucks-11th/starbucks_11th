import members from '../js/data.js';
window.onload = function () {
  const bt1 = document.querySelector('#findId');
  const name = document.querySelector('#name');
  bt1.addEventListener('click', function (e) {
    e.preventDefault();

    let memberList = JSON.parse(localStorage.getItem('members')) || [];

    if (name.value.trim() === '') {
      alert('이름을 입력해주세요!');
      return;
    }
    const obj = memberList.find((m) => m.memName === name.value);

    if (!obj) {
      alert('일치하는 아이디가 없습니다!');
      return;
    }

    if (obj.memName === name.value) {
      alert(`회원님의 아이디는 '${obj.memId}'입니다`);
      window.location.href = '../html/layout.html';
    }
  });
};
