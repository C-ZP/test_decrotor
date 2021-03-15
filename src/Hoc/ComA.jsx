import React, { Component } from 'react';
import hoc from './hoc.js'

@hoc
class ComA extends Component {
    render() { 
        console.log(this.props)
        return (
            <div>
                ComA
            </div>
        );
    }
}
 
export default ComA;