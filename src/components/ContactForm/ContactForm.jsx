import { useState } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { useGetContactsQuery, useAddContactMutation, } from 'redux/contactsApi';
import { nanoid } from 'nanoid';
   

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  
  const handleSubmit = e => {
    e.preventDefault();

      const newContact = {
      id: nanoid(),
      name,
      number,
    };
 
        data.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? Report.warning(`${name}`,
        'This user is already in contacts.','OK')
          : addContact((newContact));
   
    
        reset();
          };
    
    const reset = () => {
    setName ('');
    setNumber ('');
    };
  
    const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

    return (
      <Form onSubmit={handleSubmit}>
        <Label >
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            
          />
        </Label>

        <Label >
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }



