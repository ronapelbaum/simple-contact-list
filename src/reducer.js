import { Types } from './actions';
import mockData from './mock/contact-list.json';

const initialState = {
  counter: 0,
  contactList: mockData,
};

const ContactListReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.INCREMENT_COUNTER:
      // TODO add immutability (lodash/cloneDeep)
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};

export default ContactListReducer;
