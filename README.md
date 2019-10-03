# react-hoc (using functional components)
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Example for react higher order component:

```
import React from 'react';

const higherOrderComponent = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return <WrappedComponent {...this.props}/>;
    }
  }
    
  return HOC;
};
```

HOC's has access to all react API's including state and lifecycle methods