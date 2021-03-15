import React, { Component } from 'react';
import { CountConsumer }  from './CountContext'
 
class ChildB extends Component {
  render() { 
    return (
      <div>
        ChildB --- 
        <CountConsumer>
          {
            ({count,increment,decrement})=>{

              return (
                <>
                  <button onClick={e=>decrement(2)}>-</button>
                  <span>{count}</span>
                  <button onClick={e=>increment(3)}>+</button>
                </>
              )

            }
          }
        </CountConsumer>
      </div>
    );
  }
}
 
export default ChildB;