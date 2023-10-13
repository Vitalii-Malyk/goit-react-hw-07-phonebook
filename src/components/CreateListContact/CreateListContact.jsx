import { nanoid } from 'nanoid';

import {
  ListElementStyle,
  ItemElementStyle,
  ButtonElementStyle,
} from 'components/CreateListContact/CreateListContact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contactsSlice';
import { useEffect } from 'react';

const CreateListContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteContactFromList = idContact => {
    dispatch(deleteContact(idContact));
  };

  const normalizedFilter = filter.toLocaleLowerCase();
  const filtredContacts = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const createContactItem = () => {
    return filtredContacts.map(contact => {
      return (
        <ItemElementStyle key={nanoid()}>
          {`${contact.name} : ${contact.phone}`}
          <ButtonElementStyle
            data-id={contact.id}
            onClick={() => deleteContactFromList(contact.id)}
          >
            x
          </ButtonElementStyle>
        </ItemElementStyle>
      );
    });
  };
  return <ListElementStyle>{createContactItem()}</ListElementStyle>;
};

export default CreateListContact;
