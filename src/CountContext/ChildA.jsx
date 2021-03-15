import React, { Component } from 'react';
import { CountConsumer } from './CountContext'
import ChildB from './ChildB'
 
class ChildA extends Component {
  render() { 
    return (
      <div>
        ChildA ----
      
        <CountConsumer>
          {
            ({count})=>{
              return <span>{count}</span>
            }
          }
        </CountConsumer>
        <hr/>
        <ChildB />
      </div>
    );
  }
}
 
export default ChildA;