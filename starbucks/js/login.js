import members from '../js/data.js';

window.onload = function () {
  const bt1 = document.querySelector('#login');
  const id = document.querySelector('#id');
  const password1 = document.querySelector('#password1');
  const chk = document.querySelector('#memoryId');

  if (localStorage.getItem('savedId')) {
    id.value = localStorage.getItem('savedId');
    chk.checked = true;
  }

  bt1.addEventListener('click', function (e) {
    e.preventDefault();

    let memberList = JSON.parse(localStorage.getItem('members')) || [];

    if (id.value.trim() === '') {
      alert('아이디를 입력해주세요!');
      return;
    }

    if (password1.value.trim() === '') {
      alert('비밀번호를 입력해주세요!');
      return;
    }

    const obj = memberList.find((m) => m.memId === id.value);

    if (!obj) {
      alert('존재하지 않는 아이디입니다!');
      return;
    }

    if (obj.memPass1 === password1.value) {
      alert('로그인 성공!');

      if (chk.checked) {
        localStorage.setItem('savedId', id.value);
      } else {
        localStorage.removeItem('savedId');
      }

      window.location.href = '../html/layout.html';
    } else {
      alert('비밀번호가 다릅니다!');
    }
  });
};
