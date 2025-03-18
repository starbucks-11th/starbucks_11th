import members from './data.js';

window.onload = function () {
  const password1 = document.querySelector('#password1');
  const password2 = document.querySelector('#password2');
  const id = document.querySelector('#id');
  const name = document.querySelector('#name');
  const bt1 = document.querySelector('#doubleCheck');
  const bt2 = document.querySelector('#signUp');
  let btBoolean = false;

  let memberList = JSON.parse(localStorage.getItem('members')) || members;

  bt1.addEventListener('click', function () {
    if (id.value.trim() === '') {
      alert('아이디를 입력해주세요!');
      return;
    }

    const existingMember = memberList.find((m) => m.memId === id.value);
    if (!existingMember) {
      btBoolean = true;
      alert('사용 가능한 아이디입니다!');
    } else {
      alert('이미 존재하는 아이디입니다!');
      btBoolean = false;
    }
  });

  bt2.addEventListener('click', function (event) {
    if (!btBoolean) {
      alert('아이디 중복 확인을 먼저 해주세요!');
      event.preventDefault();
      return;
    }

    if (password1.value !== password2.value) {
      alert('비밀번호가 일치하지 않습니다!');
      event.preventDefault();
      return;
    }

    if (name.value.trim() === '') {
      alert('이름을 입력해주세요!');
      event.preventDefault();
      return;
    }

    const newMember = {
      memId: id.value,
      memPass1: password1.value,
      memPass2: password2.value,
      memName: name.value,
    };

    memberList.push(newMember);
    localStorage.setItem('members', JSON.stringify(memberList));

    alert('가입이 완료되었습니다!');
    location.reload();
  });
};
