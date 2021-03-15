import React from 'react';

const CountContext = React.createContext();

const {Provider,Consumer:CountConsumer}=CountContext;
 
class CountProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        };
    }
    increment=(arg)=>{
        this.setState((state)=>({
            count:state.count+arg
        }))
    }
    decrement=(arg)=>{
        this.setState((state)=>({
            count:state.count-arg
        }))
    }
    render() { 
        return (
            <Provider value={{count:this.state.count,increment:this.increment,decrement:this.decrement}}>
                {
                    this.props.children
                }
            </Provider>
        );
    }
}
 
export {CountProvider,CountConsumer};