import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { nanoid } from 'nanoid';
import { Formik, Field } from 'formik';
import { Form, FormField, ErrorMessage } from './ContactForm.styled';
import { selectContacts } from 'redux/selectors';

import Notiflix from 'notiflix';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);

  const onChangeName = e => setName(e.currentTarget.value);
  const onChangePhone = e => setPhone(e.currentTarget.value);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      phone,
    };

    const arrayOfContactsName = [];

    for (const contact of contacts) {
      arrayOfContactsName.push(contact.name);
    }

    if (arrayOfContactsName.includes(newContact.name)) {
      Notiflix.Notify.failure(`${newContact.name} is already in contacts`);
      return;
    }

    if (newContact.name === '' || newContact.phone === '') {
      Notiflix.Notify.failure(`Please enter contact information`);
      return;
    }

    dispatch(addContact(newContact));
    setName('');
    setPhone('');
  };

  return (
    <Formik initialValues={{ name: '', phone: '' }}>
      <Form onSubmit={handleSubmit}>
        <FormField>
          Name
          <Field
            name="name"
            value={name}
            onChange={onChangeName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
          <ErrorMessage name="name" component="div" />
        </FormField>

        <FormField>
          Number
          <Field
            type="tel"
            name="phone"
            value={phone}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            onChange={onChangePhone}
          />
          <ErrorMessage name="phone" component="div" />
        </FormField>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

Notiflix.Notify.init({
  position: 'center-top',
  width: '300px',
  distance: '10px',
  opacity: 1,
  rtl: false,
  timeout: 1000,
});
