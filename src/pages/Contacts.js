import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectContacts } from 'redux/contacts/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export default function Contacts() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Add new contact</h1>
      <ContactForm />
      <h2 style={{ padding: '20px' }} >Contacts</h2>
      <Filter />
      {isLoading && <b>Request in progress...</b>}
      {contacts.length > 0 ? <ContactList /> : <p> Phonebook is empty</p>}
    </div>
  );
}
