import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = state => state.contacts.loading;

export const selectFilter = state => state.contacts.filter;

export const selectContacts = state => state.contacts.items;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, search) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    );
  }
);
