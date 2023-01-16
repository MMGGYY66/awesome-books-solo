const listBtn = document.querySelector('#listBtn');
const addNewBtn = document.querySelector('#addNewBtn');
const contactBtn = document.querySelector('#contactBtn');

const listSection = document.querySelector('.list');
const addNewSection = document.querySelector('.addNew');
const contactSection = document.querySelector('.contact-info');

listBtn.addEventListener('click', () => {
  listSection.style.display = 'block';
  addNewSection.style.display = 'none';
  contactSection.style.display = 'none';
});

addNewBtn.addEventListener('click', () => {
  listSection.style.display = 'none';
  addNewSection.style.display = 'block';
  contactSection.style.display = 'none';
});

contactBtn.addEventListener('click', () => {
  listSection.style.display = 'none';
  addNewSection.style.display = 'none';
  contactSection.style.display = 'flex';
});