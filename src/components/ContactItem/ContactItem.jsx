import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./ContactItem.module.css";

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.item}>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
