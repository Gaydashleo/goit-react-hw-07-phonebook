import axios from "axios";


const contactApi = axios.create({
  baseURL: 'https://6358255cc26aac906f3cdeec.mockapi.io/api/contacts',
  params: { _limit: 12, }
});

export const getContacts = async () => {
  const { data } = await contactApi.get('/');
  return data;
}

export const addContact = async(data) => {
  const { data:result } = await contactApi.post('/', data);
  return result;
}

export const deleteContact = async (id) => {
  const { data } = await contactApi.delete(`/${id}`);
  return data;
}