import "./App.css";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

export default function App() {
  return (
    <div>
      <h2>PhoneBook</h2>
      <ContactForm />
      <h2>My Contacts</h2>
      <SearchBox />
      <ContactList />
    </div>
  );
}
