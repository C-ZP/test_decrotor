import React from 'react';
// import PropTypes from 'prop-types';
 
const fetchHoc = (url)=>(Comp) => {
    return class extends React.Component{
        constructor(props){
            super(props)
            this.state={
                data:null,
                isLoading:true
            }
        }
        componentDidMount(){
            fetch(url).then(res=>res.json())
            .then(data=>{
                this.setState({
                    data:data.list,
                    isLoading:false
                })
            })
        }
        render(){
            return(
                <>
                    {
                        this.state.isLoading?<div>数据正在加载中......</div>:<Comp data={this.state.data} {...this.props}/>
                    }
                </>
            )
        }
    };
}
 
export default fetchHoc