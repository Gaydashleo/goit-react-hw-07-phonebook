import {  getFilter } from 'redux/filter/filter-selector';
import { useGetContactsQuery } from 'redux/contactsApi'
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import {useSelector } from 'react-redux';

export const ContactList = () => {
  const { data: contacts, isLoading, error } = useGetContactsQuery();
  const filter = useSelector(getFilter);

  const filteredContactList = () => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
        
  return (
    <List>
      {isLoading && <p> Loading...</p>}
      {error && <p> {error.data}</p>}
      {contacts && filteredContactList().map(({ id, name, phone }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          phone={phone}
        />
      ))}
      </List>
  );
};






