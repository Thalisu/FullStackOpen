import { changeFilter } from "../reducers/filterReducer";
import { useDispatch } from "react-redux";
const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (newFilter) => {
    dispatch(changeFilter(newFilter));
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={({ target }) => handleChange(target.value)} />
    </div>
  );
};

export default Filter;
