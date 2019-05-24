import React from 'react';
import './contactsHeader.scss';
import IosSettingsOutline from 'react-ionicons/lib/IosSettingsOutline'
import IosArrowBack from 'react-ionicons/lib/IosArrowBack'

class ContactsHeader extends React.PureComponent {
    render() {
        return (<header className="contactsHeader">
            <IosArrowBack className="contactsHeader__iconBack" fontSize="22px" color="#6D6D6D"/>
            <h1 className="contactsHeader__title">Контакты</h1>
            <IosSettingsOutline className="contactsHeader__iconSettings" fontSize="22px" color="#6D6D6D"/>
        </header>);
    }
}

export default ContactsHeader;
