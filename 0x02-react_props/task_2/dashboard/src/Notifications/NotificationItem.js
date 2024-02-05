import React from "react";
import './Notifications.css';


const NotificationItem = ({type, html, value}) => {
    return (
        <>
        {value && <li data-notification-type={type}>{value}</li>}
        {html && <li data-urgent='true' dangerouslySetInnerHTML={{ __html: html }}></li>}
        </>
    );
}

export default NotificationItem