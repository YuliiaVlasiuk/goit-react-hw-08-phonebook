import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { Helmet } from 'react-helmet';
//import { TaskList } from 'components/TaskList/TaskList';
//import { TaskEditor } from 'components/TaskEditor/TaskEditor';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading,selectContacts } from 'redux/contacts/selectors';
//import { Layout } from 'components/Layout';
import { ContactForm } from 'components/ContactForm/ContactForm';
//import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';


export default function Contacts() {

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  //const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
   
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
       {/* // <Filter /> */}
        {isLoading &&  <b>Request in progress...</b>}
        {contacts.length > 0 ? <ContactList /> : <p> Phonebook is empty</p>}
      </div>
    
  );
}
