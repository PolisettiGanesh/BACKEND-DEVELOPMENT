/*
{⭐ 1. JavaScript Environments

JavaScript can run in 2 places:

1) Browser (Frontend)
2) Node.js (Backend)

Both use JavaScript,
BUT they provide different APIs.
}
*/
//------------------------------------------------------------------------------
/*
{
//⭐  Browser APIs (Available ONLY in Browser)
console.log(window);     // Browser global object
console.log(self);       // Same as window
alert("Error!");         // Popup message
console.log(document);   // Access to HTML (DOM)

}
*/
//------------------------------------------------------------------------------

/*
{
Browser provides:
------------------
          window
          alert
          document
          localStorage
          fetch
          prompt
Node.js does NOT have these.
}
*/
//------------------------------------------------------------------------------


{
// ⭐ 3. Node.js APIs (Available ONLY in Node)
  console.log(global) // node global object
  console.log(globalThis); //node + browser global object
}
//------------------------------------------------------------------------------

/*
{
  Node provides:

          global
          globalThis
          require()
          module
          __filename
          __dirname
          fs (file system)
          http (server)
          path
None of these exist in browser.
}
*/
//------------------------------------------------------------------------------

/*
{
  console.log("Good Evening ! \nWelcome to Backend Batch DAY-1");
  // \n = new line.
  console.log("This is Node Day-1");
}
  */
//------------------------------------------------------------------------------
/*
{
console.log(__filename); // full path of file
console.log(__dirname);  // folder path
}
*/
//------------------------------------------------------------------------------
/*
{
console.log("Hello Backend Class!");
console.log(global);
console.log("Learning Node.js slowly, step by step...");
}
*/
//------------------------------------------------------------------------------
/*
{
  Module Wrapper Function
  Every module in Node.js is wrapped in a special function before execution. This is invisible to you but very important!
}
  */


(function(exports, require, module, __filename, __dirname) {
  console.log("Module Wrapper Function !");
})();
