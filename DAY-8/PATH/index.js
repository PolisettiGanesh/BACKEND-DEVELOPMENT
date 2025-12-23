/*{
const path = require('node:path');
console.log(__filename);
console.log(__dirname);
}*/
//---------------------------------------------------------
/*
{
const path = require('node:path');
// Relative path
const fullPath = path.join('Data','f1.txt');
console.log(fullPath);

//Absolute path
const p = path.resolve("data", "file.txt");
console.log(p);
}
*/
//-------------------------------------------------------------
/*
  {
    const path = require('node:path');
    const fileName = path.basename("/Users/bro/project/data/photo.png");
    console.log(fileName); // comes iwth extension
    //To remove that extension only filename want to visible try out this bro
    const fileName2 = path.basename("/Users/bro/project/data/photo.png",'.png');
    console.log(fileName2);

  }
  */
//---------------------------------------------------------------
/*
{
  const path = require('node:path');
  const extName = path.extname("/Users/bro/project/data/photo.png");
  const dirName = path.dirname('/Users/bro/project/data/photo.png');
  console.log(extName);
  console.log(dirName);

}
*/
//----------------------------------------------------------
/*
{
  const path = require('node:path');
  const fileName = path.basename('/Users/bro/project/data/photo.png');

  const allowed = ['.png', '.jpg', '.jpeg'];

  const ext = path.extname(fileName);

  if (!allowed.includes(ext)) {
    console.log('❌ Invalid file type');
  }
  else{
    console.log("File type is there ✅");
  }
}
*/
//--------------------------------------------------
/*
{
  const path = require('node:path');
  const info = path.parse('/Users/bro/project/data/photo.png');
  console.log(info);

  const parsed = path.parse('photo.png');

  const newName = parsed.name + '-123' + parsed.ext;

  console.log(newName);

  const p = path.parse('video.mov');

  const newFile = p.name + '.mp4';

  console.log(newFile);
}
*/
//--------------------------------------------------------
/*
{
  const path = require('path');

  const p = path.format({
    dir: '/Users/bro/project/data',
    base: 'photo.png',
  });

  console.log(p);
}
  */
//--------------------------------------------------------
/*{
  const parsed = path.parse('photo.png');

  const newPath = path.format({
    dir: '/uploads',
    name: parsed.name + '-v2',
    ext: parsed.ext,
  });

  console.log(newPath);
}
  */
//--------------------------------------------------------
/*{
  const path = require('path');
  console.log(path.isAbsolute('/data/file.txt'));
  console.log(path.isAbsolute('data/file.txt'));
}
  */
//--------------------------------------------------------
/*{
  const userPath = "uploads/photo.png";

if (!path.isAbsolute(userPath)) {
  console.log("Relative path detected");
}
}
*/
//---------------------------------------------------
/*{
  const path = require("path");

const p = path.normalize("data//users///photo.png");

console.log(p);
}*/
//--------------------------------------------

{const path = require("path");
 const p = path.normalize("data/./users/../photo.png");
console.log(p);
// . means ignore current folder
// .. go back one level
}
