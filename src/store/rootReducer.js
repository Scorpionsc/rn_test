import { combineReducers } from 'redux';
import contactsReducer from '../screens/contacts/store/reducers';

export const rootReducer = combineReducers({
    contacts: contactsReducer,
});
