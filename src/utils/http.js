const HttpGet = (url,cb) =>{
    // fetch(url).then(res=>res.json())
    // .then(data=>{
    //     cb(data);
    // }).catch(err=>{
    //     console.log(err);
    // })
    return new Promise((resolve,reject)=>{
        try {
            fetch(url).then(res=>res.json())
            .then(data=>{
                resolve(data)
            })
        } catch (error) {
            reject(error)
        }
    })
}

const HttpPost=(url,data,cb)=>{
    fetch(url,{
        method:"post",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>res.json())
    .then(data=>{
        cb(data);
    })
}

export{
    HttpGet,
    HttpPost
}