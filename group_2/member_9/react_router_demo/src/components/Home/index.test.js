import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';

describe('<Home />', () => {
  it(`header is '首页'`, () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.contains(<h1>首页</h1>)).toBe(true);
  });
});
