import s from './ContactList.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const ContactList = ({ contact, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contact.map(({name, number, id}) => (
        <li key={nanoid()} className={s.item}>
          <span className={s.span} >{name}:</span>
          <span>{number}</span>
          <button  className={s.btn} type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;