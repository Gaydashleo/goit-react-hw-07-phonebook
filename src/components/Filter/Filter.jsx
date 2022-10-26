
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, getFilter } from 'redux/contacts-slice';
import { Label, Input } from './Filter.styled';

export function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => dispatch(changeFilter(e.currentTarget.value)); 

  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" value={filter} onChange={onChangeFilter} />
    </Label>
  );
}


