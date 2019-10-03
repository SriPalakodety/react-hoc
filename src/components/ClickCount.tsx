import React from 'react';
import HOC from '../containers/HOC';

const ClickCount = (props) => {
    const {count, name, incrementCounter} = props;
    return (
        <button onClick={incrementCounter}>
           {name} Clicked on {count} times
         </button>
    )
}

const EnhancedClickCount = HOC(ClickCount);

export default EnhancedClickCount;
