import React, { Component } from 'react';

import {Provider,testContext,Consumer} from './testContent.js'

class ChildA extends Component {
    static contextType = testContext;
    render() { 
        console.log(this)
        return (
            <div>
                ChildA --- {this.context}
                <hr/>
                <ChildB/>
            </div>
        );
    }
}

const ChildB=()=>{
    return(
        <>
            ChildB
            <Consumer>
                {
                    (val)=>{
                        return <strong>{val}</strong>
                    }
                }
            </Consumer>
        </>
    )
}
 
class App extends Component {
    render() { 
        return (
            <Provider value="数据">
                App
                <hr/>
                <ChildA/>
            </Provider>
        );
    }
}

export default App;