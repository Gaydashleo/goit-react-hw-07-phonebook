import { useState } from 'react';
import { Label, Input } from './Filter.styled';

export function Filter () {
   const [filter, setFilter] = useState('');

    const handleChange = e => {
    setFilter(e);
    };
  
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





