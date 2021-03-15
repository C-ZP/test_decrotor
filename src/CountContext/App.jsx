import React, { Component } from 'react';
import {CountProvider} from './CountContext'
import ChildA from './ChildA'
 
class App extends Component {
    render() { 
        return (
            <>
                <CountProvider>
                    App
                    <hr/>
                    <ChildA/>
                </CountProvider>
            </>
        );
    }
}
 
export default App;