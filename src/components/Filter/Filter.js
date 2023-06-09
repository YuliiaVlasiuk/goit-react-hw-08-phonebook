import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { checkFilter } from 'redux/contacts/slice';

export const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();
  const changeFieldFilter = event =>
    dispatch(checkFilter(event.currentTarget.value));

  return (
    <div>
      <p style={{ paddingBottom: '10px' }}>Find contacts by name</p>
      <input type="text" value={filter} onChange={changeFieldFilter}></input>
    </div>
  );
};
