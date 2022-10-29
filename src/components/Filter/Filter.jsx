
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/filter-slice';
import {  getFilter } from 'redux/filter/filter-selector';
import { Label, Input } from './Filter.styled';


export function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e =>
    dispatch(changeFilter(e.target.value)); 

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
        required
      />
    </Label>
  );
}





