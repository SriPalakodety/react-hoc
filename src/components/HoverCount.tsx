import React from 'react'
import HOC from '../containers/HOC';

const HoverCount = (props) => {
    const {count, name, incrementCounter} = props;
    return (
        <div>
            {name} <span onMouseOver={incrementCounter}>Hovered on {count} times</span>
        </div>
    )
}

const EnhancedHoverCount = HOC(HoverCount);

export default EnhancedHoverCount;
