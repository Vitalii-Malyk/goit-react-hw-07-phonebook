// import { useEffect, useState } from 'react';
import CreateListContact from 'components/CreateListContact/CreateListContact';
import FormCreateContact from 'components/Forms/FormCreateContact';
import FilterContacts from 'components/FilterContacts/FilterContacts';

import bgImage from 'helper/image/telefon-bgc.jpg';
import { useSelector } from 'react-redux';

const App = () => {
  const { error } = useSelector(state => state.contacts);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        fontSize: 24,
        color: 'antiquewhite',
        flexDirection: 'column',
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'unset',
        backgroundPosition: 'center center',
      }}
    >
      <h1>Phonebook</h1>
      <FormCreateContact />
      <h2>Contacts</h2>
      <FilterContacts />
      {error && <b>{error}</b>}
      <CreateListContact />
    </div>
  );
};

export default App;
