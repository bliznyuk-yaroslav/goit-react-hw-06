import { FaPhoneAlt, FaRegSmile, FaQuestion } from "react-icons/fa";
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContacts } from "../../redux/contactSlice";

export default function ContactList({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <div className={css.cont}>
      <div>
        <p className={css.text}>
          <FaRegSmile className={css.icon} />
          {name}
        </p>
        <p className={css.text}>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button
        type="button"
        className={css.btn}
        onClick={() => dispatch(deleteContacts(id))}
      >
        Delete
      </button>
    </div>
  );
}
