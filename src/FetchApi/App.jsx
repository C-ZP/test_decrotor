import React, { Component } from 'react';
import {HttpGet,HttpPost} from '../utils/http.js'
import {Api} from '../utils/api.js'
 
class App extends Component {
    componentDidMount=async()=>{
        // fetch('http://localhost:5000/newslist')
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data);
        // })
        // HttpGet(Api.news,(data)=>{
        //     console.log(data);
        // })

        let data = await HttpGet(Api.news)
        console.log(data);

        HttpPost(Api.login,{username:'王武',password:'123456'},(data)=>{
            console.log(data);
        })
        // fetch('http://localhost:5000/login',{
        //     method:"post",
        //     body:JSON.stringify({username:"kiki",password:'123456789'}),
        //     headers:{
        //         "Content-Type":"application/json"
        //     }
        // }).then(res=>res.json())
        // .then(data=>{
        //     console.log(data);
        // })
    }
    render() { 
        return (
            <div>
                App
            </div>
        );
    }
}
 
export default App;