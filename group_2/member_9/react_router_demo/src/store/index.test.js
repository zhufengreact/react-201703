import React from 'react';
import store from './index';

describe('store', () => {
  it('should have three message', () => {
    expect(store.listMessages().length).toBe(3);
  });

  it('should get message by message title', () => {
    let message = store.getMessage('zhufeng');
    expect(message).toMatchObject({
      title: 'zhufeng',
      content: 'zhufeng react'
    });

    message = store.getMessage('react');
    expect(message).toMatchObject({
      title: 'react',
      content: 'npm install react --save-dev'
    });

    message = store.getMessage('react-router');
    expect(message).toMatchObject({
      title: 'react-router',
      content: 'npm install react-router@3.0.0 --save-dev'
    });
  });

  it('should return undefined when message not exists', () => {
    let message = store.getMessage('notExistsMessage');
    expect(message).toBeUndefined();
  });
});
