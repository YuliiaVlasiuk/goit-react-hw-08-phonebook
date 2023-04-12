import { Layout } from 'components/Layout/Layout';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { Filter } from './Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

import css from './App.module.css';
export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <div className={css.box}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        {contacts.length > 0 ? <ContactList /> : <p> Phonebook is empty</p>}
      </div>
    </Layout>
  );
};
