export const Types = {
  GET_CONTACTS: 'GET_CONTACTS',
  SET_CONTACTS: 'SET_CONTACTS',
};

export const getContacts = () => ({
  type: Types.GET_CONTACTS,
});
export const setContacts = data => ({
  type: Types.SET_CONTACTS,
  data,
});
