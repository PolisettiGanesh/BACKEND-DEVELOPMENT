/*
{
  //import http module this is recommended way latest version
const http = require('node:http');

//port no
const PORT = 9000;

//create a server and i return one object
const server = http.createServer((req, res) => {
  res.write('Iam from server brother !');
  res.end(); // we need to end this otherwise browser is waiting you should not see output
});

//Listen to the server on PORT number on your browser
server.listen(PORT, () => {
  console.log('server started listen on port :',PORT);
});

}
*/
//--------------------------------------------------------------------
/*
{
  //one more way to import but it is not recommend
  const http = require("http");

  http.createServer((req,res)=>{
    res.write("Your data reached to server successfully !");
    res.end();
  }).listen(9000,()=>{
      console.log('server started listen on port 9000 ');
  })
}
*/
//-----------------------------------------------------------------
/*
{
const http = require('node:http');
const PORT = 9000;
const server = http.createServer((req,res)=>{
  console.log("Request come from the user");
  res.end("successfully received your data");
})

server.listen(PORT,()=>{
  console.log("server started on",PORT);
})

}
*/
//--------------------------------------------------------------
/*
{
const http = require('node:http');
const PORT = 9000;
const server = http.createServer((req,res)=>{
 // console.log(req);
  console.log(req.headers);
  console.log(req.method);
  console.log(req.url);
  res.end("successfully received your data");
})

server.listen(PORT,()=>{
  console.log("server started on",PORT);
})
}
*/
//-------------------------------------------------------
/*
{
const http = require('node:http');
const PORT = 9000;
const server = http.createServer((req, res) => {
  console.log(req.url);
  switch (req.url) {
    case '/':
      res.write('Home page');
      break;
    case '/about':
      res.write('About Page');
      break;
    case '/contact':
      res.write('contact page');
      break;
    default:
      res.end('Bad response try  valid url again !');
  }
  res.end();
});

server.listen(PORT, () => {
  console.log('server started on', PORT);
});
}
*/
//----------------------------------------------------------------
/*
{
const http = require('node:http');
const fs = require("node:fs");

const PORT = 9000;
const server = http.createServer((req, res) => {
const data = Date.now() + " " + req.url;
  fs.appendFile("log.txt",data,(data,err)=>{
    if(err){
      console.log(err);
    }
  })
  console.log(req.url);
  switch (req.url) {
    case '/':
      res.write('Home page');
      break;
    case '/about':
      res.write('About Page');
      break;
    case '/contact':
      res.write('contact page');
      break;
    default:
      res.end('Bad response try  valid url again !');
  }
  res.end();
});

server.listen(PORT, () => {
  console.log('server started on', PORT);
});
}
*/
//---------------------------------------------------------------------

{
  const http = require('node:http');

//web server
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(
      '<h1>Iam Ganesh currently learning Fullstack web development  UI....</h1>'
    );
    res.end();
  } else if (req.url === '/contact') {
    res.setHeader('Content-Type', 'text/plain');
    res.write('<h1>This is Ganesh contact page 8374454396</h1>');
    res.end();
  } else {
    res.write('Error Page go to home !');
    res.end();
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log('❤️‍🔥 server is listening on port - ', PORT);
});

}
