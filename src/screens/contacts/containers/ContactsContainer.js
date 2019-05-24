import { connect } from 'react-redux';
import Contacts from "../components/Contacts";
import { getContacts } from '../store/actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    const contacts = state.contacts.contacts
        .sort( (a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        })
        .reduce((acum, contact) => {
            const firstLetter = contact.name[0];
            if(acum[firstLetter] === undefined) acum[firstLetter] = [];
            acum[firstLetter].push(contact);
            return acum;
        }, {});

    return {
        ...state.contacts,
        contacts,
    }
};
const mapActionsToProps = (dispatch) => ({
    fetchContacts: bindActionCreators(getContacts, dispatch),
});


export default connect(mapStateToProps, mapActionsToProps)(Contacts);
