import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsApi';
import { Item, Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, }) => {
  const [onDeleteContact, { isLoading: isDeleting }] = useDeleteContactMutation;
  return (
    <Item key={id}>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={onDeleteContact}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
