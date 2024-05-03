import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";

import css from "./ContactList.module.css";

export default function ContactList() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.contacts);
  const { filter } = useSelector((state) => state.filter);
  const filterArray = items.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={css.list}>
      {filterArray.map(({ name, number, id }) => (
        <li key={id} className={css.item}>
          <Contact key={id} name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
}
