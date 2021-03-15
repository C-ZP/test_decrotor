import React from 'react';
// import PropTypes from 'prop-types';
 
const hoc = (Comp) => {
    return class extends React.Component{
        render(){
            return(
                <>
                    <Comp title="标题" {...this.props}/>
                    <div>
                         @euna 版权所有！！
                    </div>
                </>
            )
        }
    };
}
 
export default hoc;