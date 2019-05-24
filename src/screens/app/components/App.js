import React from 'react';
import './app.scss';
import Contacts from "../../contacts/containers/ContactsContainer";

class App extends React.PureComponent {
    render() {
        return (<div className="app">
            <Contacts/>
        </div>);
    }
}

export default App;
