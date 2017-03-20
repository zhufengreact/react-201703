import React from 'react';
import { IndexLink, Link, createMemoryHistory, location } from 'react-router';
import { mount } from 'enzyme';
import AppRouter from './index';

const history = createMemoryHistory(location);

function clickLink(link) {
  link.simulate('click', {
    button: 0
  });
}

function gotoHome(wrapper) {
  const links = wrapper.find('.container .nav li a');
  expect(links.length).toBe(2);
  expect(links.at(0).text()).toBe('首页');
  clickLink(links.at(0));
}

describe.only('<AppRouter />', () => {
  it('should render AppRouter', () => {
    const wrapper = mount(<AppRouter history={history} />);

    expect(wrapper.find('.container .content').text()).toBe('首页');

    const links = wrapper.find('.container .nav li a');
    expect(links.length).toBe(2);
    expect(links.at(0).text()).toBe('首页');
    expect(links.at(0).getNode().className).toBe('active');

    let messagesLink = links.at(1);
    expect(messagesLink.text()).toBe('消息');
    expect(messagesLink.getNode().className).not.toBe('active');
  });

  it('should navigate to messages page when click message link', () => {
    const wrapper = mount(<AppRouter history={history} />);

    let links = wrapper.find(Link);
    expect(links.length).toBe(2);
    let messagesLink = links.at(1);
    expect(messagesLink.text()).toBe('消息');
    expect(messagesLink.find('a').getNode().className).not.toBe('active');
    clickLink(messagesLink);

    links = wrapper.find('.container .nav li a');
    expect(links.length).toBe(2);

    // home link is not active now
    expect(links.at(0).text()).toBe('首页');
    expect(links.at(0).getNode().className).not.toBe('active');
    // messages link is active now
    messagesLink = links.at(1);
    expect(messagesLink.text()).toBe('消息');
    expect(messagesLink.getNode().className).toBe('active');

    const messageItemLinks = wrapper.find('.container .content').find(Link);
    expect(messageItemLinks.length).toBe(3);
  });

  it('should navigate to message detail page when click message item link', () => {
    const wrapper = mount(<AppRouter history={history} />);
    gotoHome(wrapper);

    let links = wrapper.find(Link);
    expect(links.length).toBe(2);
    let messagesLink = links.at(1);
    expect(messagesLink.text()).toBe('消息');
    expect(messagesLink.find('a').getNode().className).not.toBe('active');
    clickLink(messagesLink);

    links = wrapper.find('.container .nav li a');
    expect(links.length).toBe(2);
    // home link is not active now
    expect(links.at(0).text()).toBe('首页');
    expect(links.at(0).getNode().className).not.toBe('active');
    // messages link is active now
    messagesLink = links.at(1);
    expect(messagesLink.text()).toBe('消息');
    expect(messagesLink.getNode().className).toBe('active');

    const messageItemLinks = wrapper.find('.container .content').find(Link);
    expect(messageItemLinks.length).toBe(3);
    clickLink(messageItemLinks.at(0));

    links = wrapper.find('.container .nav li a');
    expect(links.length).toBe(2);
    // home link is not active now
    expect(links.at(0).text()).toBe('首页');
    expect(links.at(0).getNode().className).not.toBe('active');
    // messages link is not active now
    messagesLink = links.at(1);
    expect(messagesLink.text()).toBe('消息');
    expect(messagesLink.getNode().className).not.toBe('active');

    expect(wrapper.find('.container .content h1').text()).toBe('zhufeng');
    expect(wrapper.find('.container .content p').text()).toBe('zhufeng react');
  });
});
