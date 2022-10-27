import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsApi';
import {  Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, }) => {
  const [onDeleteContact, { isLoading: isDeleting }] = useDeleteContactMutation;
  return (
    
    <>
      <p>
        {name}: {number}
      </p>
      <Button
        type="submit"
        name={name}
        disabled={isDeleting}
        onClick={() => onDeleteContact(id)}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </Button>
    </>
    );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
