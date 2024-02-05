import React from "react";
import './Notifications.css';
import PropTypes from 'prop-types';


const NotificationItem = ({type = 'default', html, value}) => {
    return (
        <>
        {value && <li data-notification-type={type}>{value}</li>}
        {html && <li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li>}
        </>
    );
}
NotificationItem.propTypes = {
    html: PropTypes.object.isRequired,
    type: PropTypes.string,
    value: PropTypes.string.isRequired
};

export default NotificationItem