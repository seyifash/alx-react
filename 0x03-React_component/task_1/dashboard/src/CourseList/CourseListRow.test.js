import React from 'react';
import CourseListRow from './CourseListRow';
import { shallow }  from 'enzymes';

describeAll('courseRow components test', () => {
    it('it should render corselist without crashing', ()=> {
        const wrapper = shallow(<CourseListRow textFirstCell='test' />);
        expect(wrapper.exists()).toBe(true);
    });
    it('renders one cell with colspan = 2 when textSecondCell does not exist', ()=> {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test' textSecondCell={null} />);
        expect(wrapper.find('tr').children()).toHaveLength(1);
        expect(wrapper.find('tr').childAt(0).html()).toEqual(
            '<th colSpan="2">test</th>'
        );
    });
    it('check to test the component renders correctly two td elements within a tr element', ()=> {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='test' textSecondCell={test} />);
        expect(wrapper.find('tr').children()).toHaveLength(2);
        expect(wrapper.find('tr').childAt(0).html()).toEqual('<td>test</td>');
        expect(wrapper.find('tr').childAt(1).html()).toEqual('<td>test</td>');
    });
})