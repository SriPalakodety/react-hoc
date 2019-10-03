import React, { Component } from 'react';

class ClickCount extends Component<{ name: string }, { count: number }> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCounter = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    const { name } = this.props;
    return (
      <button onClick={this.incrementCounter}>
        {name} Clicked on {this.state.count} times
      </button>
    );
  }
}

export default ClickCount;
