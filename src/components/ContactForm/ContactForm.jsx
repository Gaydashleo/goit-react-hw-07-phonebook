import { useState } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { nanoid } from 'nanoid';
import {  useGetContactsQuery,useAddContactMutation,} from 'redux/contactsApi';
   

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const onChangeName = e => setName(e.currentTarget.value);
  const onChangeNumber = e => setNumber(e.currentTarget.value);

  const onSubmitForm = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

        contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? Report.warning(`${name}`,
        'This user is already in contacts.','OK')
      : addContact(newContact);
    
        reset();
          };
    
    const reset = () => {
    setName ('');
    setNumber ('');
  };
  
    return (
      <Form onSubmit={onSubmitForm}>
        <Label >
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={onChangeName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label >
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={onChangeNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }



