import React,{Component} from 'react';
// import PropTypes from 'prop-types';
import fetchHoc from './fetchHoc'

@fetchHoc('/api/product')
class ComB extends Component{
    render(){
        return (
            <div>
                ComB
                <hr/>
                <ul>
                    {
                        this.props.data.map(item=>{
                            return(
                                <li key={item.id}>{item.title}==={item.price}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
 
// ComB.propTypes = {};
 
export default ComB;