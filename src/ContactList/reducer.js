import { Types } from "./actions";

const initialState = {
  loading: false,
  contactList: [],
  prefix: null,
};

const ContactListReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_CONTACTS:
      return {
        ...state,
        loading: true,
      };
    case Types.SET_CONTACTS:
      // TODO add immutability (lodash/cloneDeep)
      return {
        ...state,
        loading: false,
        contactList: action.data,
      };
    case Types.SEARCH_CONTACTS:
      return {
        ...state,
        prefix: action.prefix,
      };
    default:
      return state;
  }
};

export default ContactListReducer;
