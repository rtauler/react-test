import React from 'react';

function ContactCard(props) {
    console.log(props);
    return (
        <div className="contact-card">
            <img src={props.contact.imgURL} alt=""/>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Mail: {props.contact.email}</p>
        </div>
    )
}

export default ContactCard;