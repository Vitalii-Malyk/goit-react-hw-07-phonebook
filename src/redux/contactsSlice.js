import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getContacts, delContact, postContact } from 'api/contacts';
import {
  handlePending,
  handleRejected,
  handlefulfilled,
  handlefulfilledAdd,
  handlefulfilledDel,
  handlefulfilledFetch,
} from 'helper/functions/functions';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const addContact = createAsyncThunk('contacts/addContact', async () => {
  return await postContact();
});

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const data = await delContact(id);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handlefulfilledFetch)
      .addCase(addContact.fulfilled, handlefulfilledAdd)
      .addCase(deleteContact.fulfilled, handlefulfilledDel)
      .addMatcher(action => {
        action.type.endsWith('pending', handlePending);
      })
      .addMatcher(action => {
        action.type.endsWith('rejected', handleRejected);
      })
      .addMatcher(action => {
        action.type.endsWith('fulfilled', handlefulfilled);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
export { fetchContacts, addContact, deleteContact };
