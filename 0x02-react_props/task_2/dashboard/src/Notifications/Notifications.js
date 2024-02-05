import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

const Notifications = () => {
	return (
		<div className='Notifications'>
			<p style={{ display: 'inline', marginRight: '80%' }}>
				Here is the list of notifications
			</p>
			<button
				aria-label='Close'
				onClick={console.log('Close button has been clicked')}
			>
				<img style={{ display: 'inline' }} src={closeIcon} alt='Close' />
			</button>
			<ul>
				<NotificationItem type='default' value='New course available' />
				<NotificationItem type='default' value='New course available' />
				<NotificationItem type='default' html={getLatestNotification()} />
			</ul>
		</div>
	);
};

export default Notifications;