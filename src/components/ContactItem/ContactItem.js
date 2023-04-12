import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div>
      <span style={{ width: '220px' }}>
        {' '}
        {contact.name} : {contact.phone}{' '}
      </span>
      <button onClick={handleDelete}> Delete </button>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
};
