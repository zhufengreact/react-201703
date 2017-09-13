import React from 'react';
import { Link } from 'react-router';
import { mount } from 'enzyme';
import MessageList from './index';
import store from '../../store';

describe('<MessageList />', () => {
  it(`should render three messages`, () => {
    const wrapper = mount(<MessageList />);

    const links = wrapper.find(Link);
    const messages = store.listMessages();
    expect(links.length).toBe(3);
    expect(links.length).toBe(messages.length);

    messages.forEach((message, index) => {
      const link = links.at(index);
      expect(link.text()).toBe(message.title);
      expect(link.prop('to')).toBe(`/messages/${message.title}`);
    });
  });
});
