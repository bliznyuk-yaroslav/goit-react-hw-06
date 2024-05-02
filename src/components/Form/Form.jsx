import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "../Form/Form.module.css";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContacts } from "../../redux/contactSlice";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Min 3 characters!!!")
    .max(50, "Max 50 characters!!!")
    .required("Is required!!!"),
  number: Yup.string()
    .min(3, "Min 3 characters!!!")
    .max(50, "Max 50 characters!!!")
    .required("Is required!!!"),
});

export default function ContactForm() {
  const checkContactExists = (contacts, name) => {
    return contacts.some((el) => el.name.toLowerCase() === name.toLowerCase());
  };

  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contacts);
  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    if (checkContactExists(contacts, name)) {
      alert(`${name} is already a contact`);
      resetForm();
    } else {
      dispatch(
        addContacts({
          id: nanoid(),
          name,
          number,
        })
      );
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formElem}>
          <label htmlFor="name" className={css.text}>
            Name
          </label>
          <Field
            className={css.input}
            name="name"
            id="name"
            placeholder="Enter name"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.formElem}>
          <label htmlFor="number" className={css.text}>
            Number
          </label>
          <Field
            className={css.input}
            name="number"
            id="number"
            placeholder="Enter number"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}
