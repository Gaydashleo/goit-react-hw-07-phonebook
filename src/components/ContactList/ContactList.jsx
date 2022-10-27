import PropTypes from 'prop-types';
import { useGetContactsQuery } from 'redux/contactsApi'
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export function ContactList({filter}) {
  const {contacts} = useGetContactsQuery();
  
  const filteredContactList =contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredContactList) {
   return (
     <List>
      {filteredContactList.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          />
      ))}
    </List>
  );
}
 };

ContactList.propTypes = {
  filter: PropTypes.string,
};

