import { Types } from './actions';

const initialState = {
  loading: false,
  contactList: [],
};

const ContactListReducer = (state = initialState, action) => {
  console.log('rapelbaum - ContactListReducer', action);
  
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
    default:
      return state;
  }
};

export default ContactListReducer;
