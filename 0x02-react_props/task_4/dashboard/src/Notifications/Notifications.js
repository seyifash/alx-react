import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';

const Notifications = ({ displayDrawer }) => {
	return (
		<div className='container'>
			{displayDrawer && (
				<div className="menuItem">
					Your notifications
				</div>
			)}
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
					<NotificationItem type='urgent' value='New course available' />
					<NotificationItem type='default' value='New resume available' />
					<NotificationItem type='default' html={getLatestNotification()} />
				</ul>
			</div>
		</div>
	);
};

Notifications.propTypes = {
	displayDrawer: PropTypes.bool
};
  
Notifications.defaultProps = {
	displayDrawer: false
};

export default Notifications;