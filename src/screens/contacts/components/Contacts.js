import React from 'react';
import './contacts.scss';
import PropTypes from 'prop-types';
import ContactsHeader from "./ContactsHeader";
import ContactsList from "./ContactsList";

class Contacts extends React.PureComponent {
    static propTypes = {
        contacts: PropTypes.object,
        contactsLoading: PropTypes.bool,

        fetchContacts: PropTypes.func,
    };

    static defaultProps = {
        contacts: null,
        contactsLoading: false,

        fetchContacts: null,
    };

    constructor(props){
        super(props);
        this.props.fetchContacts();
    };


    getListProps = () => {
        const {contacts, contactsLoading} = this.props;
        return {
            contacts,
            contactsLoading,
        };
    };

    renderAddButton = () => {
        return (<button className="contacts__add">Создать группу</button>)
    };


    render() {
        return (<section className="contacts">
            <ContactsHeader/>
            <ContactsList {...this.getListProps()}/>
            {this.renderAddButton()}
        </section>);
    }
}

export default Contacts;
