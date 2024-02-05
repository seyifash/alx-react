import React from 'react';
import CourseListRow from './CourseListRow';
import CourseList from './CourseList';
import { shallow } from 'enzyme';

describe('CourseList component test cases', () => {
    it('renders CourseList component without crashing', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders the 5 different rows', () => {
        const wrapper = shallow(<CourseList />);

        expect(wrapper.find('thead').children()).toHaveLength(2);
        wrapper.find('thead').forEach((node) => {
            expect(node.equals(<CourseListRow textFirstCell='Foo' />));
        });

        expect(wrapper.find('tbody').children()).toHaveLength(3);
        wrapper.find('tbody').forEach((node) => {
            expect(node.equals(<CourseListRow textFirstCell='Foo' />));
        });
    });
});