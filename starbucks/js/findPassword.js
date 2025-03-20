import members from '../js/data.js';
window.onload = function () {
  const bt1 = document.querySelector('#findPass');
  const name = document.querySelector('#name');
  const id = document.querySelector('#id');
  bt1.addEventListener('click', function (e) {
    e.preventDefault();

    let memberList = JSON.parse(localStorage.getItem('members')) || [];

    if (name.value.trim() === '') {
      alert('이름을 입력해주세요!');
      return;
    }
    if (id.value.trim() === '') {
      alert('아이디를 입력해주세요!');
      return;
    }
    const obj = memberList.find(
      (m) => m.memName === name.value && m.memId === id.value
    );

    if (!obj) {
      alert('일치하는 회원정보가 없습니다!');
      return;
    }

    if (obj.memId === name.value) {
      alert(`회원님의 비밀번호는 '${obj.memPass1}'입니다`);
      window.location.href = '../html/layout.html';
    }
  });
};
