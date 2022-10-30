import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsApi';
import { Button } from './ContactItem.styled';

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
  phone: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
