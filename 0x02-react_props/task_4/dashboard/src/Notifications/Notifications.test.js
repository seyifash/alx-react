import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notification tests', () => {
	it('renders Notification component without crashing', () => {
		const component = shallow(<Notifications />);

		expect(component).toBeDefined();
	});

	it('renders ul', () => {
		const component = shallow(<Notifications />);

		expect(component.find('ul')).toBeDefined();
	});

	it('renders three list items', () => {
		const component = shallow(<Notifications />);

		expect(component.find('li')).toHaveLength(3);
	});

	it('renders correct text', () => {
		const component = shallow(<Notifications />);

		expect(component.find('p').prop('children')).toBe(
			'Here is the list of notifications'
		);
	});
	it('displays the menu item when displayDrawer is false', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);
		expect(wrapper.find('.menuItem').text()).toEqual('Your notifications'); 
	});

	it('does not display the div.Notifications when displayDrawer is false', () => {
	const wrapper = shallow(<Notifications displayDrawer={false} />);
	expect(wrapper.find('.Notifications').exists()).toBeFalsy();
	});

	it('displays the menu item when displayDrawer is true', () => {
	const wrapper = shallow(<Notifications displayDrawer={true} />);
	expect(wrapper.find('.menuItem').text()).toEqual('Your notifications');
	});

	it('displays the div.Notifications when displayDrawer is true', () => {
	const wrapper = shallow(<Notifications displayDrawer={true} />);
	expect(wrapper.find('.Notifications').exists()).toBeTruthy(); 
	});

});