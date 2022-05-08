import 'material-icons/iconfont/material-icons.css';
import './sass/main.scss';

import { getRefs } from './js/getRefs';
const { formSearch, modalForm, contactsList } = getRefs();

// Event listeners
modalForm.addEventListener('submit', e => {
  e.preventDefault();
  const { name, phone, email } = e.target;

  const userName = name.value.trim();
  const userPhone = phone.value.trim();
  const userEmail = email.value.trim();

 
  if (!userName || !userPhone || !userEmail) {
    alert('Please fill in all fields');
    return;
  }

  const contacts = {}
  contacts.name = userName;
  contacts.phone = userPhone;
  contacts.email = userEmail;
  
  const contaktsItem = localStorage.setItem('contacts', JSON.stringify(contacts));
  // contaktsItem.push(localStorage.setItem('contacts', JSON.stringify(contacts)));
  console.log(contacts);

  modalForm.reset();
});
