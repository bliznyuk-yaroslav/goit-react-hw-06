import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  item: [],
};
const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContacts: (state, action) => {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
  },
});
export const { addContacts, deleteContacts } = contactSlice.actions;
export const contactsReduser = contactSlice.reducer;
