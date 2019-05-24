import React from 'react';
import './contact.scss';
import PropTypes from "prop-types";
import IosAdd from 'react-ionicons/lib/IosAdd'


class Contact extends React.PureComponent {
    static propTypes = {
        id: PropTypes.number,
        name: PropTypes.string,
        photo: PropTypes.string,
        phone: PropTypes.string,
        selected: PropTypes.bool,

        onSelect: PropTypes.func
    };

    setSelected = () => {
        const {
            id,
            onSelect,
        } = this.props;

        onSelect(id);
    };

    render() {
        const {
            name,
            photo,
            phone,
            selected,
        } = this.props;

        return (<div className="contact">
            <div className="contact__description">
                <div className="contact__photo">
                    <img src={photo} alt={name}/>
                </div>
                <div className="contact__info">
                    <div className="contact__name">{name}</div>
                    <div className="contact__phone">{phone}</div>
                </div>
            </div>
            <div className="contact__checkBox" onClick={this.setSelected}>
                {
                    selected
                        ? (<div className="contact__checkBoxChecked">
                            <IosAdd fontSize="60px" color="#ffffff"/>
                        </div>)
                        : (<div className="contact__checkBoxInner"/>)
                }
            </div>
        </div>);
    }
}

export default Contact;
