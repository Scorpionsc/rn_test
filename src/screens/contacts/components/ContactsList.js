import React from 'react';
import './contactsList.scss';
import PropTypes from "prop-types";
import IosRefresh from 'react-ionicons/lib/IosRefresh'
import Contact from "./Contact";

class ContactsList extends React.PureComponent {
    static propTypes = {
        contacts: PropTypes.object,
        contactsLoading: PropTypes.bool,
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        return !prevState.update ? {
            ...prevState,
            selected: ContactsList.getSelectedStates(nextProps.contacts)
        } : null;
    }

    static getSelectedStates(contacts) {
        return Object.values(contacts).reduce((acum, val) => {
            return {
                ...acum,
                ...val.reduce((acumInner, contact) => {
                    acumInner[contact.id]= false;
                    return acumInner;
                },{}),
            };
        }, []);
    };

    constructor(props) {
        super(props);

        this.state = {
            selected: {},
            update: false,
        };
    }


    goTo = (key) => {
        return () => {
            console.log(key);
        }
    };

    renderAddButton = () => {
        return (<button className="contactsList__add">Создать группу</button>)
    };

    renderAlphabet = () => {
        const { contacts } = this.props;

        return (<div className="contactsList__alphabet">
            {
                Object.keys(contacts).map(key => (<button
                    className="contactsList__alphabetItem"
                    key={key}
                    onClick={this.goTo(key)}>{key}</button>))
            }
        </div>);
    };

    renderList = () => {
        const { contacts } = this.props;
        const { selected } = this.state;

        return (<div className="contactsList__list">
            {
                Object.keys(contacts).map(key => (<div
                    className="contactsList__listItem"
                    key={key}>
                    {
                        <div className="contactsList__title">{key}</div>
                    }
                    {
                        contacts[key].map( contact => (
                            <Contact {...contact} key={contact.id} selected={selected[contact.id]} onSelect={this.setSelected}/>
                        ))
                    }

                </div>))
            }
        </div>);
    };

    renderPreloader = () => {
        const { contactsLoading } = this;
        return contactsLoading
            ? (<div className="contactsList__loader">
                <IosRefresh fontSize="60px" color="#ccc" rotate={true}/>
            </div>)
            : null;
    };

    setSelected = (id) => {
        const { selected } = this.state;

        this.setState({
            selected: {
                ...selected,
                [id]: !selected[id]
            },
            update: true,
        });
    };


    render() {
        return (<div className="contactsList">
            {this.renderPreloader()}
            {this.renderAlphabet()}
            {this.renderList()}
            {this.renderAddButton()}
        </div>);
    }
}

export default ContactsList;