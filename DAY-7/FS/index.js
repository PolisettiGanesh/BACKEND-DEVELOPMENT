/*{
  const fs = require('node:fs');
  fs.writeFileSync('File1.txt', 'Hello World');
}
  */
//----------------------------------------------------
/*
{
  const fs = require('node:fs');
  fs.writeFileSync('File1.txt', 'Hello World');
  const data = fs.readFileSync("File1.txt","utf-8");
  console.log(data);
}
*/
//----------------------------------------------------
/*
{
  const fs = require('node:fs');
  fs.writeFileSync('File1.txt', 'Hello World');
  fs.appendFileSync("File1.txt"," this is fs Module from NodeJs !");
  fs.appendFileSync("File1.txt","\nThis is built in module .");

  const data = fs.readFileSync("File1.txt","utf-8");
  console.log(data);

}
*/
//--------------------------------------------------------
/*
{
const fs = require('node:fs');
fs.writeFileSync("File2.txt","This is new file and will delete in this scope itself");
const data = fs.readFileSync("File2.txt","utf-8");
console.log(data);
// Delete it by uncommenting below code
//  fs.unlinkSync("File2.txt");
}
*/
//----------------------------------------------------------
/*
{
  const fs = require('node:fs');
  fs.mkdirSync("Files",{recursive:true});
  console.log("Folder created successfully check once in Explorer");

  // we can add new subfolders in this folder now
  fs.mkdirSync("Files/System/windows",{recursive:true});
  console.log("sub folder and file also created in it ");
}
*/
//---------------------------------------------
/*
{
  const fs = require('node:fs');
  fs.mkdirSync("Data",{recursive:true});
  // we can read all folders
  const folders = fs.readdirSync('Data');
  console.log(folders);

  folders.forEach((file)=>{
    console.log(file);
  })
}
*/
//-----------------------------------------------
/*
{
  const fs = require('node:fs');
  const result1 = fs.existsSync('Data/f1.txt');
  const result2 = fs.existsSync('Data/f1.txt/f1.txt');
  console.log(result1);
  console.log(result2);
}
*/
//---------------------------------------------------------
/*
{
const fs = require('node:fs');
// Data/f2.txt exists
if (fs.existsSync('Data/f2.txt')) {
  fs.unlinkSync('Data/f2.txt');
  console.log('File deleted Successfully !');
} else {
  console.log('File not found !');
}
}
*/
//-----------------------------------------------------------
/*
{
const fs = require('node:fs');
if (fs.existsSync("Data/f1.txt")) {
  const data = fs.readFileSync("Data/f1.txt", "utf-8");
  console.log(data);
} else {
  console.log("File does not exist");
}
}
*/
//------------------------------------------------------------
/*
{
  const fs = require('node:fs');
  fs.writeFileSync("File2.txt","This is new file just now added");
  const info = fs.statSync('File2.txt');
  console.log(info);
  console.log(info.isFile());
  console.log(info.isDirectory());
  console.log(info.size);
  console.log(info.birthtime);
  console.log(info.mtime);
}
*/
//-------------------------------------------------------
/*
const fs = require("fs");

if (fs.existsSync("test.txt")) {
  const info = fs.statSync("test.txt");

  if (info.isFile()) {
    console.log("It is a file");
  }
  else{
    console.log("This is not a file !")
  }
}
else{
  console.log("No such File exist here pls check !");
}
  */
//-----------------------------------------------------
/*
{
  const fs = require('node:fs');
  fs.writeFileSync("test1.txt","This is test1 file created to rename this file to text.txt");
  fs.renameSync('test1.txt','text.txt');
  console.log("File renamed check once !");
}
*/
//--------------------------------------------------------
/*{
  const fs = require('node:fs');

if (!fs.existsSync("WINDOWS")) {
  fs.mkdirSync("WINDOWS");
}

fs.renameSync("WINDOWS", "MACOS");
console.log("Folder renamed successfully");
}
*/
//--------------------------------------------------------------
{/*
const fs = require("fs");

fs.mkdirSync("temp/files", { recursive: true });
fs.writeFileSync("temp/files/a.txt", "hello");

fs.rmSync("temp", { recursive: true });
console.log("Folder deleted");
*/
}
//----------------------------------------------------------

const fs = require("fs");

if (fs.existsSync("temp")) {
  fs.rmSync("temp", { recursive: true });
  console.log("Folder removed safely");
} else {
  console.log("Folder not found");
}
