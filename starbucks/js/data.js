const members = JSON.parse(localStorage.getItem('members')) || [
  { memId: 'a', memPass1: 'a', memPass2: 'a', memName: 'a' },
  { memId: 'b', memPass1: 'b', memPass2: 'b', memName: 'b' },
];

export default members;
