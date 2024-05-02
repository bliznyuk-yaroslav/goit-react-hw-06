import "./App.css";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import Form from "../Form/Form";

export default function App() {
  return (
    <div>
      <h2>PhoneBook</h2>
      <Form />
      <h2>My Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
