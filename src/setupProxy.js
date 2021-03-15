const {createProxyMiddleware} = require('http-proxy-middleware')

let config = {
    target:'http://localhost:5000',
    changeOrigin:true,
    pathRewrite:{
        '^/api':''
    }
}

module.exports=(app)=>{
    app.use('/api',createProxyMiddleware(config))
}