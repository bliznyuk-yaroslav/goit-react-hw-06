import css from "../Filter/Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { filterContacts } from "../../redux/filterSlice";

export default function Filter() {
  const dispatch = useDispatch();

  const handleFilter = (e) => dispatch(filterContacts(e.target.value));

  return (
    <div className={css.cont}>
      <label className={css.text}> Find contact by name:</label>
      <input
        type="text"
        className={css.input}
        name="filter"
        placeholder="Enter name to filter"
        onChange={handleFilter}
      />
    </div>
  );
}
