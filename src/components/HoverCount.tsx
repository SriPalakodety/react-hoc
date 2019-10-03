import React, { Component } from 'react';

class HoverCount extends Component<{ name: string }, { count: number }> {
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
      <div>
        {name} <span onMouseOver={this.incrementCounter}>Hovered on {this.state.count} times</span>
      </div>
    );
  }
}

export default HoverCount;
