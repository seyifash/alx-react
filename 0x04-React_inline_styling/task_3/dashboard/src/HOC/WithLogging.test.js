import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';

const TestComponent = () => <p>Test Component</p>;

describe('WithLogging tests', () => {
  it('should call console.log on mount and dismount', () => {
    const spy = jest.spyOn(console, 'log'); // Mock console.log
    const WrappedComponent = WithLogging({ WrappedComponent: TestComponent });
    const wrapper = shallow(<WrappedComponent />);

    // Ensure console.log is called once on mount
    expect(spy).toHaveBeenCalledTimes(1);

    // Unmount the component
    wrapper.unmount();

    // Ensure console.log is called twice, indicating mount and unmount
    expect(spy).toHaveBeenCalledTimes(2);

    // Restore the mock after the test
    spy.mockRestore();
  });

  it('should log out the right message on mount and dismount', () => {
    const spy = jest.spyOn(console, 'log'); // Mock console.log
    const WrappedComponent = WithLogging({ WrappedComponent: TestComponent });
    const wrapper = shallow(<WrappedComponent />);

    // Ensure console.log is called with the correct message on mount
    expect(spy).toHaveBeenCalledWith('Component TestComponent is mounted');

    // Unmount the component
    wrapper.unmount();

    // Ensure console.log is called with the correct message on unmount
    expect(spy).toHaveBeenCalledWith('Component TestComponent is going to unmount');

    // Restore the mock after the test
    spy.mockRestore();
  });
});
