import React, { Component } from 'react';
import ComA from './ComA'
import ComB from './ComB'
 
class App extends Component {
    render() { 
        return (
            <div>
                App
                <hr/>
                <ComA/>
                <hr/>
                <ComB/>
            </div>
        );
    }
}
 
export default App;