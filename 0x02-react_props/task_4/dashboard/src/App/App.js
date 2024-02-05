import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from './CourseList';


function App({ isLoggedIn }) {
		return (
		<React.Fragment>
			<Notifications />
			<div className="App">
				<Header />
				{isLoggedIn ? <CourseList /> : <Login />}
				<Footer />
			</div>
		</React.Fragment>
		);
}

App.defaultProps = {
	isLoggedIn: false,
};s

App.propTypes = {
	isLoggedIn: PropTypes.bool,
};

export default App;