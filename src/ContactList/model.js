/* eslint-disable import/prefer-default-export */
import uid from "uid";

const localState = (state) => state.ContactListReducer;

export const displayedContactList = (state) => {
  const { contactList, prefix, loading } = localState(state);
  if (loading) {
    return Array.from(new Array(7)).map(() => ({
      id: uid(),
      loading,
    }));
  }
  if (!prefix) {
    return contactList;
  }
  return contactList.filter((contact) =>
    contact.name.toLowerCase().startsWith(prefix.toLowerCase())
  );
};
