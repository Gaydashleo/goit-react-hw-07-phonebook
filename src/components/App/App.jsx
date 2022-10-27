// import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import {Filter}  from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Container, Section, Titleh1, Titleh2 } from './App.styled';
import { useState } from 'react';


export function App() {
  const [filter, setFilter] = useState('');

    const handleChange = e => {
    setFilter(e);
    };
  
    return (
      <Container>
        <Section title="Phonebook">
          <Titleh1>Phonebook</Titleh1>
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Titleh2>Contacts</Titleh2>
          <Filter filter={filter} handleChange={handleChange} />
          <ContactList />
        </Section>
      </Container>
    );
  }

