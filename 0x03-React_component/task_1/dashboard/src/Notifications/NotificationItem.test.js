import React from 'react';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';


describe('rndering notification', () => {
    it('renders NotificationItem component without crashing', () => {
        const wrapper = shallow(<NotificationIem />);
        expect(wrapper.exists()).toBe(true);
    });
    it('renders correct html from type="default" value="test"', () => {
        const wrapper = shallow(<NotificationIem />);
        wrapper.setProps({type: 'default', value: 'test' });
        expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
    });
    it('Verify that by passing a dummy html prop, it renders the correct html', () => {
        const wrapper = shallow(<NotificationIem />);
        wrapper.setProps({html: '<u>test</u>'}) 
        expect(wrapper.html()).toEqual('<li data-urgent="true"><u>test</u></li>') ;
    });
})