import PropTypes from 'prop-types';
import { useGetContactsQuery } from 'redux/contactsApi'
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import {useSelector } from 'react-redux';


export const ContactList = () => {
  const { data: contacts, isLoading, error } = useGetContactsQuery();
  const filter = useSelector(state => state.filter);

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
          number={phone}
        />
      ))}
      </List>
  );
};
 

// export function ContactList({filter}) {
//   const {contacts} = useGetContactsQuery();
  
//   const filteredContactList =contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   if (filteredContactList) {
//    return (
//      <List>
//       {filteredContactList.map(({ id, name, number }) => (
//         <ContactItem
//           key={id}
//           id={id}
//           name={name}
//           number={number}
//           />
//       ))}
//     </List>
//   );
// }
//  };

ContactList.propTypes = {
  filter: PropTypes.string,
};

