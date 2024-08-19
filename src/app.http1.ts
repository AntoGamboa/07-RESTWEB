import http from 'http';
import  fs  from 'fs';

const server = http.createServer((req,resp) =>{
    console.log(req.url);
    // resp.writeHead(200,{'Content-Type':'text/html'})
    // resp.write('<h1>Hola mundo</h1>')
    // resp.end();
    // const data = {"name":"jhon doe","age":36,"city":"new york"}
    // resp.writeHead(200,{'Content-Type':'application/json'})
    // resp.end(JSON.stringify(data))
    
    
    if(req.url == '/'){
        const htmlfile = fs.readFileSync('./public/index.html',"utf-8")
        resp.writeHead(200,{'Content-Type':'text/html ',})
        resp.write(htmlfile);
        resp.end();
        return;
     
    }



    if(req.url == '/style.css'){
        const cssfile = fs.readFileSync('./public/style.css');
        resp.writeHead(200,{'Content-Type':'text/css'})
        resp.end(cssfile)
        
        
    }else if(req.url == '/app.js'){
        const jsfile = fs.readFileSync('./public/app.js');
        resp.writeHead(200,{'Content-Type':'application/javascript'})
        resp.end(jsfile);
       
    }
    
})


server.listen(8080,() =>{
    console.log('server running in port 8080')
});