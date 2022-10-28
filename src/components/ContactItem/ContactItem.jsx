import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsApi';
import { Button } from './ContactItem.styled';

// export const ContactItem = ({ name, phone, id }) => {
//   const [deleteContact, result] = useDeleteContactMutation();
//   return (<>
//     <p>{name} : {phone} </p>
//     <ButtonContact type="button"
//       onClick={() => deleteContact(id)}
//       contactId={id}
//       disabled={result.isLoading}  >
//       Delete
//     </ButtonContact>
//   </>)
// }

export const ContactItem = ({ id, name, phone }) => {
  const [onDeleteContact, result ] = useDeleteContactMutation();
  return (
        <>
      <p>
        {name}: {phone}
      </p>
      <Button
        type="button"
        contactId={id}
        disabled={result.isLoading}
        onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </>
    );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
