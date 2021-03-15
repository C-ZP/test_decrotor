import React, { Component } from 'react';
import ComA from './ComA'
import ComB from './ComB'
 
class App extends Component {
    render() { 
        return (
            <div>
                App
                <hr/>
                <ComA msg="消息"/>
                <hr/>
                <ComB/>
            </div>
        );
    }
}
 
export default App;