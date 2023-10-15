// import { useEffect, useState } from 'react';
import CreateListContact from 'components/CreateListContact/CreateListContact';
import FormCreateContact from 'components/Forms/FormCreateContact';
import FilterContacts from 'components/FilterContacts/FilterContacts';

import { useSelector } from 'react-redux';
import { WrapElementStyle, WrapMainElementStyle } from './App.styled';

const App = () => {
  const { error, items } = useSelector(state => state.contacts);

  return (
    <WrapMainElementStyle>
      <h1>Phonebook</h1>
      <FormCreateContact />
      <h2>Contacts</h2>
      <FilterContacts />
      {error && <b>{error}</b>}
      {items ? (
        <CreateListContact />
      ) : (
        <WrapElementStyle>
          The phone book is empty, add a contact
        </WrapElementStyle>
      )}
    </WrapMainElementStyle>
  );
};

export default App;
