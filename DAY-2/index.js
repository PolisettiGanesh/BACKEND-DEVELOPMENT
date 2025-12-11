
/*
{
  //Both are valid
const fs = require("node:fs")// best practise
//const fs = require("fs");

setTimeout(() => {
  console.log("Hello Iam from Timer-1")
}, 0);

console.log("Hello From Top Level code");


}
*/

/*
{ //output
  Hello From Top Level code
Hello Iam from Timer-1
}
*/

//----------------------------------------------------------------------------------------
/*
{
  const fs = require("node:fs");
  setTimeout(() => {
  console.log("Hello Iam from Timer-1")
}, 0)
  setImmediate(()=>{
    console.log("Hello Iam from Immediate");
  })

  //Note: In official documentation itself telling that this are non deterministic its depends on perfomance based output ,Read more baout this their docs
}
*/
/*
{
  //output varies when you run multiple times checkout in terminal by running 2-3 times
  Hello Iam from Immediate
Hello Iam from Timer-1

Hello Iam from Timer-1
Hello Iam from Immediate
}
*/
//-----------------------------------------------------------------------------------------------
/*
{
  const fs = require("node:fs");

  setTimeout(()=>{
    console.log("Hello Iam from Timer1")
  },0);

  setImmediate(()=>{
    console.log("Iam from Immediate");
  })

  fs.readFile("sample.txt","utf-8",()=>{
    console.log("IO pooling Fininshed");
  })
  console.log("Hello Iam from Top Level Code");
}
  */
/*
{
  //output
  Hello Iam from Top Level Code
Hello Iam from Timer1
Iam from Immediate
IO pooling Fininshed
}
*/
//---------------------------------------------------------------------------

/*
{
  const fs = require("node:fs");

  setTimeout(()=>{
    console.log("Hello Iam from Timer1")
  },0);

  setImmediate(()=>{
    console.log("Iam from Immediate 1");
  })

  fs.readFile("sample.txt","utf-8",()=>{
    console.log("IO pooling Fininshed");
    setTimeout(() => {
      console.log("Iam from Timer 2");
    }, 0);
    setTimeout(() => {
      console.log("Iam from Timer 3");
    }, 5*1000);
    setImmediate(()=>{
      console.log("Iam from Immediate func 2");
    })
  })

  console.log("Hello Iam from Top Level Code");
}
*/
/*
{
  //output
Hello Iam from Top Level Code
Hello Iam from Timer1
Iam from Immediate 1
IO pooling Fininshed
Iam from Immediate func 2
Iam from Timer 2
Iam from Timer 3
}
*/
//------------------------------------------------------------------------------------

{
 const fs = require("node:fs");
const crypto = require("node:crypto");
const start = Date.now();
process.env.UV_THREADPOOL_SIZE =10;

setTimeout(() => {
  console.log("Hello Iam from Timer1");
}, 0);

setImmediate(() => {
  console.log("Iam from Immediate 1");
});

// CPU intensive tasks – use libuv thread pool
crypto.pbkdf2('password1', 'salt1', 10000, 1024, 'sha512', () => {
  console.log(`${Date.now() - start}ms`, 'password1');
});
crypto.pbkdf2('password2', 'salt1', 10000, 1024, 'sha512', () => {
  console.log(`${Date.now() - start}ms`, 'password2');
});
crypto.pbkdf2('password3', 'salt1', 10000, 1024, 'sha512', () => {
  console.log(`${Date.now() - start}ms`, 'password3');
});
crypto.pbkdf2('password4', 'salt1', 10000, 1024, 'sha512', () => {
  console.log(`${Date.now() - start}ms`, 'password4');
});

fs.readFile("sample.txt", "utf-8", () => {
  console.log("IO pooling Fininshed");

  setTimeout(() => {
    console.log("Iam from Timer 2");
  }, 0);

  setTimeout(() => {
    console.log("Iam from Timer 3");
  }, 5 * 1000);

  setImmediate(() => {
    console.log("Iam from Immediate func 2");
  });
});

console.log("Hello Iam from Top Level Code");
// understand this code with the help of chatgpt for explanation

}
// {
//   By default there are only 4 threads
//   we can chnage if we want using
// }
/*
//----------------------------------------------------------------------------------
