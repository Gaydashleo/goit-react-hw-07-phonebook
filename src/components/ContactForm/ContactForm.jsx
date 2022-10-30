import { useState } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { useGetContactsQuery, useAddContactMutation, } from 'redux/contactsApi';
import { nanoid } from 'nanoid';
   

export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const { data } = useGetContactsQuery();
  const [addContact, result] = useAddContactMutation();

    const handleSubmit = e => {
    e.preventDefault();

      const newContact = {
      id: nanoid(),
      name:name,
      phone:phone,
    };

        data.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? Report.warning(`${name}`,
        'This user is already in contacts.','OK')
          : addContact((newContact)) && reset();
          };
        
        // reset();
        //   };
    
    const reset = () => {
    setName ('');
    setPhone ('');
    };
  
    const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setPhone(value);
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
            required
          />
        </Label>

        <Label >
          Number
          <Input
            type="tel"
            name="number"
            value={phone}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button
          type="submit"
          disabled={result.isLoading}
        >Add contact</Button>
      </Form>
    );
  }



