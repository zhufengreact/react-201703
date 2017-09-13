import React from 'react';
import { IndexLink, Link } from 'react-router';
import { mount } from 'enzyme';
import App from './index';

describe('<App />', () => {
  it('should render App with children', () => {
    const wrapper = mount(<App><h1>Hello, world!</h1></App>);
    expect(wrapper.contains(<h1>Hello, world!</h1>)).toBe(true);
  });

  it(`should render nav`, () => {
    const wrapper = mount(<App />);

    const links = wrapper.find(Link);
    expect(links.length).toBe(2);
    expect(links.at(0).text()).toBe('首页');
    expect(links.at(0).prop('to')).toBe('/');
    expect(links.at(1).text()).toBe('消息');
    expect(links.at(1).prop('to')).toBe('/messages');
  });

  it(`should render home nav with react-router's IndexLink`, () => {
    const wrapper = mount(<App />);

    const links = wrapper.find(IndexLink);
    expect(links.length).toBe(1);
    expect(links.text()).toBe('首页');
    expect(links.prop('to')).toBe('/');
  });
});
