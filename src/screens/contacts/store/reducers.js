import { SET_CONTACTS, GET_CONTACTS } from './actions';

const initialState = {
  contacts: [],
  contactsLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        contactsLoading: false,
      };
    case GET_CONTACTS:
      return { ...state, contactsLoading: true };
    default:
      return state;
  }
};
