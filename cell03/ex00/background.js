document.querySelector('#change-color').addEventListener('click', () => {
  const color = `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, '0')}`;
  document.body.style.backgroundColor = color;
});
