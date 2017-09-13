class Store {
  messages = [
    {
      title: 'zhufeng',
      content: 'zhufeng react'
    },
    {
      title: 'react',
      content: 'npm install react --save-dev'
    },
    {
      title: 'react-router',
      content: 'npm install react-router@3.0.0 --save-dev'
    }
  ]

  listMessages() {
    return this.messages;
  }

  getMessage(title) {
    return this.messages.find(message => message.title === title);
  }
}

const store = new Store();
export default store;
