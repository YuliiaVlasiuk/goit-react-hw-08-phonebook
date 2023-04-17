import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { checkFilter } from '../../redux/contactsSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();
  const changeFieldFilter = event =>
    dispatch(checkFilter(event.currentTarget.value));

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={changeFieldFilter}></input>
    </div>
  );
};
