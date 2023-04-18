import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <ul>
      {visibleContacts.map(contact => (
        <li key={contact.id} style={{ paddingBottom: '10px' }}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};
