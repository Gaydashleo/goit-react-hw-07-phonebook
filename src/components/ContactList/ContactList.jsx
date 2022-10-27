import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getContacts,deleteContact } from 'redux/contacts-slice';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export function ContactList() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const deleteSelectedContact = contactId => dispatch(deleteContact(contactId));

  const filteredContacts = () => {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter));
    };

  const filteredContactList = filteredContacts();

  return (
    <List>
      {filteredContactList.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={()=>deleteSelectedContact(id)}
        />
      ))}
    </List>
  );
};


