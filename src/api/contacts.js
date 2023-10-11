import axios from 'axios';
import { Notify } from 'notiflix';
axios.defaults.baseURL = 'https://6526d9f2917d673fd76d18bb.mockapi.io';

export async function getContacts() {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function postContact() {
  try {
    const { data } = await axios.post('/contacts');
    return Notify.info(
      { data },
      {
        position: 'center-center',
        timeout: '1500',
      }
    );
  } catch (error) {
    console.error(error);
  }
}

export async function delContact(id) {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    return Notify.info(
      { data },
      {
        position: 'center-center',
        timeout: '1500',
      }
    );
  } catch (error) {
    console.error(error);
  }
}
