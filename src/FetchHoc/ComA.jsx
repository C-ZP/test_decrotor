import React, { Component } from 'react';
import fetchHoc from './fetchHoc'

@fetchHoc('/api/newslist')
class ComA extends Component {
    render() { 
        return (
            <ul>
            {
              this.props.data.map((item,i)=>(<li key={i}>{item.name}</li>))
            }
            </ul>
        );
    }
}
 
export default ComA;