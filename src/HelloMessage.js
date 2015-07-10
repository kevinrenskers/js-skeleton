import React from 'react';

export default class HelloMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.increment.bind(this), 1000);
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {counter} = this.state;
    const color = counter % 2 ? 'red' : 'black';

    return (
      <div style={{color}}>
        Hello {counter}!
      </div>
    );
  }
}
