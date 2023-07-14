const floatBtn = document.getElementById('floatBtn');
const floatMenu = document.getElementById('floatBtnWrapper');

floatBtn.addEventListener('click', () => {
    floatBtn.classList.toggle('trigger');
    floatMenu.classList.toggle('trigger');
});