import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import ContactItem from "../ContactItem/ContactItem";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
