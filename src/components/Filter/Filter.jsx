
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter-slice';
import {  getFilter } from 'redux/filter-selector';
import { Label, Input, Text } from './Filter.styled';


export function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFieldFilter = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <Label>
      <Text>Find contacts by name</Text>
      <Input type="text" value={filter} onChange={changeFieldFilter} />
    </Label>
  );
}





