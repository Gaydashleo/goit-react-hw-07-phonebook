
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export  function Filter({ filter, handleChange }) {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={e => handleChange(e.target.value)}
        required
      />
    </Label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func,
};

