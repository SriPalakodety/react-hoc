import React, {Component} from 'react'

export default function HOC(WrappedComponent) {
    class CounterHOC extends Component<{ name: string }, { count: number }> {
        constructor(props) {
            super(props);        
            this.state = {
                 count: 0
            }
        }
        
        incrementCounter = () => {
            this.setState(prevState => {
                return {count: prevState.count +1}
            })
        }
        render() {
            const {count} = this.state;
            return (
                <div>
                    <WrappedComponent count={count} incrementCounter={this.incrementCounter} {...this.props}/>
                </div>
            )
        }
    }
    return CounterHOC;
}
