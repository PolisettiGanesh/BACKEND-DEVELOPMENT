/*
{
//import the URL no need to install through npm i url
const url = require("url");

//Legacy approach
const parsedURL = url.parse(
  "https://example.com:8080/path?name=maimoon&age=22",
)

console.log(parsedURL);
}
*/
//----------------------------------------------------------
/*
{
  const url = require("node:url");
  const parsedURL = url.parse(
    "https://example.com:8080/path?name=maimoon&age=22",
    true // extra param that will return query string in output in obj
  )
  console.log(parsedURL);
}
*/
//-------------------------------------------------------------------
/*
{
  const url = require("node:url");
  const parsedURL = url.parse(
    "https://example.com:8080/path?name=maimoon&age=22",
    true
  )
  console.log("path: ",parsedURL.path)
  console.log("pathname: ",parsedURL.pathname)
  console.log("query: ",parsedURL.query);
  console.log("port no : ",parsedURL.port);
}
*/
//------------------------------------------------------------
/*
{
  // no need to import url module here [Modern Way]
  // const url = require("node:url");
  const myURL = new URL(
    "https://example.com:8080/path?name=maimoon&age=22",
  )
  console.log(myURL);
}
*/
//-------------------------------------------------------
/*
{
  const url = new URL(
    "https://example.com:8080/path?name=maimoon&age=22",
  )
  console.log(url);
  console.log(url.username);
  console.log(url.href);
  console.log(url.host);
  console.log(url.hostname);
  console.log(url.search);
  console.log(url.searchParams);
  console.log(url.hash);
  console.log(url.port);
  console.log(url.origin);
}
*/
//-----------------------------------------------------------------
/*
{
const url = new URL(
  "https://example.com/products?name=Ganesh&age=21"
)
console.log("name : ",url.searchParams.get("name"));
console.log("age : ",url.searchParams.get("age"));
console.log("city : ",url.searchParams.get("city"));
}
*/
//-----------------------------------------------------
/*
{
  const url = new URL(
    "https://example.com/products?name=maimoon&age=22"
  )
  url.searchParams.append("city","sundupalli");
  url.searchParams.append("village","kotapalli");
  url.searchParams.set("name","Ganesh");
  url.searchParams.delete("age");
  console.log("Final Url after updation :",url.toString());
}
*/
//----------------------------------------------------------------
/*
{
const url = new URL(
  "https://example.com/products?name=Ganesh&city=sundupalli&village=kotapalli"
)
for(const[key,value] of url.searchParams){
  console.log(key," - ",value);
}
}
*/
//---------------------------------------------------
/*
{
  const base = "http://localhost:3000";
  const reqURL ="/example.com/products?name=Ganesh&city=sundupalli&village=kotapalli";

  const url = new URL(reqURL,base);
  console.log(url);
  console.log(url.search);
  console.log(url.searchParams);
  console.log(url.searchParams.get("name"));
  console.log(url.searchParams.get("age"));

}
*/
const value = "red shoes & socks";
const encoded = encodeURIComponent(value);
const decoded = decodeURIComponent(encoded);

console.log("encoded:", encoded);
console.log("decoded:", decoded);
