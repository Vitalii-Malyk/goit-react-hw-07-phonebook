import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getContacts, delContact, postContact } from 'api/contacts';
import {
  handlePending,
  handleRejected,
  handlefulfilled,
  handlefulfilledAdd,
  handlefulfilledFetch,
} from 'helper/functions/functions';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getContacts();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.responce.data);
    }
  }
);

const addContact = createAsyncThunk('contacts/addContact', async () => {
  return await postContact();
});

const deleteContact = createAsyncThunk('contacts/deleteContact', async () => {
  return await delContact();
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handlefulfilledFetch)
      .addCase(addContact.fulfilled, handlefulfilledAdd)
      .addMatcher(action => {
        action.type.endsWith('/pending', handlePending);
      })
      .addMatcher(action => {
        action.type.endsWith('/rejected', handleRejected);
      })
      .addMatcher(action => {
        action.type.endsWith('/fulfilled', handlefulfilled);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
export { fetchContacts, addContact, deleteContact };
