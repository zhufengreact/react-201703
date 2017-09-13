import React from 'react';
import { mount } from 'enzyme';
import Message from './index';

describe('<Message />', () => {
  it(`should render message by message title`, () => {
    const wrapper = mount(<Message params={{title: 'react'}} />);

    const h1 = wrapper.find('h1');
    expect(h1.length).toBe(1);
    expect(h1.text()).toBe('react');

    const p = wrapper.find('p');
    expect(p.length).toBe(1);
    expect(p.text()).toBe('npm install react --save-dev');
  });

  it(`should not render message when message not exists`, () => {
    const wrapper = mount(<Message params={{title: 'notExistsMessage'}} />);

    const h1 = wrapper.find('h1');
    expect(h1.length).toBe(0);
    const p = wrapper.find('p');
    expect(p.length).toBe(0);
  });
});
