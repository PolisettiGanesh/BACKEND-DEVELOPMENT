/*
{
  //simple exmaple of readble stream
  const {Readable} = require('node:stream');
  const readbleStream = new Readable({
    read(){

    }  // if you wnat to read then mention it otherwise error
  })
  readbleStream.on('data',(chunk)=>{
    console.log('Data coming : ',chunk); // binary data
    console.log('Data coming : ',chunk.toString()); // string data format
  })
  readbleStream.push("Hello I'am Ganesh");
}
*/
//----------------------------------------------------------------
/*
{
  //simple exmaple of readble stream
  const {Readable} = require('node:stream');
  const readbleStream = new Readable({
    highWaterMark:5, // this is bytes when you want control data ,if i wnat 2 bytes then that data will sow otherwise not
    read(){

    }  // if you want to read then mention it otherwise error
  })
  readbleStream.on('data',(chunk)=>{
    console.log('Data coming : ',chunk); // binary data
    console.log('Data coming : ',chunk.toString()); // string data format
  })
  // console.log((readbleStream.push("Hello I'am Ganesh")));
  console.log((readbleStream.push("Hell")));
}
*/
//-------------------------------------------------------------
/*
{
const {Writable} = require('node:stream');

const writebleStream = new Writable({
  write(s){
    console.log("Data is coming -->",s);
    console.log("Data is coming -->",s.toString());
  }
  // write:function(){} valid
})
writebleStream.write("Hello I'am Ganesh from Kotapalli !");
}
*/
//------------------------------------------------------
/*
 {
  const {Readable,Writable} = require('node:stream');
  const readbleStream = new Readable({
    read(){
    }
  })
   const writableStream = new Writable({
    write(s){
      console.log("Writting :",s.toString());
    }
  })

  readbleStream.on('data',(chunk)=>{
    // console.log('Data coming : ',chunk.toString());
    writableStream.write(chunk);

  })

  readbleStream.push("Hello I'am Ganesh");
 }
 */
//-------------------------------------------------------------------
/*{
  const fs = require('node:fs');
  const  sampleFileStream = fs.createReadStream('sample.txt');
  const outputFileStream = fs.createWriteStream('output.txt');
  sampleFileStream.on('data',(chunk)=>{
    console.log('Data Received -> ',chunk.toString());
    const finalString = chunk.toString().toUpperCase();
    outputFileStream.write(finalString);
  })
}
*/
//----------------------------------------------------------
/*
{
  const fs = require('node:fs');
  const  sampleFileStream = fs.createReadStream('sample.txt');
  const outputFileStream = fs.createWriteStream('output.txt');
  sampleFileStream.on('data',(chunk)=>{
    console.log('Data Received -> ',chunk.toString());
    const finalString = chunk.toString().replaceAll(/file/gi,'txt').toUpperCase();
    outputFileStream.write(finalString);
  })
}
*/
//--------------------------------------------------------------------
/*
{
  const fs = require('node:fs');
  const { Transform } = require('node:stream');

  const sampleFileStream = fs.createReadStream('sample.txt');
  const outputFileStream = fs.createWriteStream('output.txt');

  const replaceWordProcessing = new Transform({
    transform(chunk, encoding, callback) {
      const finalString = chunk
        .toString()
        .replaceAll(/file/gi, 'txt')
        .toUpperCase();
      callback(null, finalString);
    },
  });

  sampleFileStream.pipe(replaceWordProcessing).pipe(outputFileStream);
  //   readableStream -->     tranform   -->      writableStream
}
  */
//----------------------------------------------------------
{
  /*  Let's organise the above code
   *  make a file replaceWordProcesser and shift  that code into this file
        then import Transform class and export that file
   * After exporting replaceWordProcessor file then import this file in index.js file
   * Make one more file upperCaseProcessor file then shift the finalString to uppercase logic and export it
   * After exporting import it on index.js file

        sampleFileStream
                  .pipe(replaceWordProcessing)
                  .pipe(upperCaseProcessing)
                  .pipe(outputFileStream);

   * Here error sometime in pipeline there is leaks so we have to handle errors
           sampleFileStream
                  .pipe(replaceWordProcessing)
                  .on('error',(err)=>{
                    console.log(err);
                  })
                  .pipe(upperCaseProcessing)
                    .on('error',(err)=>{
                    console.log(err);
                  })
                  .pipe(outputFileStream)
                    .on('error',(err)=>{
                    console.log(err);
                  })

      * Below this organised code practise once


                  ✅ Folder Structure
              project/
                sample.txt
                output.txt
                index.js
                replaceWordProcessor.js
                upperCaseProcessor.js
//-------------------------------------------------------------
//1) replaceWordProcessor.js
const { Transform } = require("node:stream");

const replaceWordProcessor = new Transform({
  transform(chunk, encoding, callback) {
    try {
      const replaced = chunk.toString().replaceAll(/file/gi, "txt");
      callback(null, replaced);
    } catch (err) {
      callback(err);
    }
  },
});

module.exports = replaceWordProcessor;
//---------------------------------------------------------------
//2) upperCaseProcessor.js
const { Transform } = require("node:stream");

const upperCaseProcessor = new Transform({
  transform(chunk, encoding, callback) {
    try {
      const upper = chunk.toString().toUpperCase();
      callback(null, upper);
    } catch (err) {
      callback(err);
    }
  },
});

module.exports = upperCaseProcessor;
//-------------------------------------------------------------
// 3) index.js

const fs = require("node:fs");

const replaceWordProcessor = require("./replaceWordProcessor");
const upperCaseProcessor = require("./upperCaseProcessor");

const sampleFileStream = fs.createReadStream("sample.txt");
const outputFileStream = fs.createWriteStream("output.txt");

sampleFileStream
  .pipe(replaceWordProcessor)
  .on("error", (err) => console.log("ReplaceWord Error:", err))
  .pipe(upperCaseProcessor)
  .on("error", (err) => console.log("UpperCase Error:", err))
  .pipe(outputFileStream)
  .on("error", (err) => console.log("WriteStream Error:", err));
  */
  // Note: To overcome this complexity below is the better organised code
  /*

    1. index.js
    ---------------
const fs = require("node:fs");
const { pipeline } = require("node:stream");

const replaceWordProcessing = require("./replaceWordProcessor");
const uppercaseWordProcessing = require("./upperCaseProcessor");

const sampleFileStream = fs.createReadStream("sample.txt");
const outputWritableStream = fs.createWriteStream("output.txt");

pipeline(
  sampleFileStream,
  replaceWordProcessing,
  uppercaseWordProcessing,
  outputWritableStream,
  (err) => {
    if (err) {
      console.log("❌ Pipeline Error:", err);
    } else {
      console.log("✅ Pipeline executed successfully");
    }
  }
);

      2.replaceWordProcessor
      ------------------------

const { Transform } = require("node:stream");

const replaceWordProcessing = new Transform({
  transform(chunk, encoding, callback) {
    const result = chunk.toString().replaceAll(/file/gi, "txt");
    callback(null, result);
  },
});

module.exports = replaceWordProcessing;

    3.uppercaseWordProcessor
    --------------------------
    const { Transform } = require("node:stream");

const replaceWordProcessing = new Transform({
  transform(chunk, encoding, callback) {
    const result = chunk.toString().replaceAll(/file/gi, "txt");
    callback(null, result);
  },
});

module.exports = replaceWordProcessing;



How they connect✅
-----------------
pipeline(
  sampleFileStream,
  replaceWordProcessing,
  uppercaseProcessing,
  outputWritableStream,
  (err) => {
    if (err) console.log(err);
    else console.log("Done ✅");
  }
);


// Note: We can handle errors sometimes generate error in any fucntion and check in console whether the code is working or not
that code check in chatgpt how its working
*/
}
//-----------------------------------------------------------------
{
const { Transform } = require("node:stream");

const objectStream = new Transform({
  objectMode: true,
  transform(chunk, encoding, callback) {
    chunk.age = chunk.age + 1;
    callback(null, chunk);
  },
});

objectStream.on("data", (data) => {
  console.log(data);
});

objectStream.write({ name: "Ganesh", age: 22 });
objectStream.write({ name: "Rahul", age: 25 });
/*
🧠 What is Object Mode? (1-line)

-->  By default, streams work with Buffer / string.
    In objectMode, streams can handle JavaScript objects directly.

❌ Normal Stream (NO objectMode)
    stream.write({ name: "Ganesh" }); // ❌ ERROR
    
    Because Node expects Buffer or string, not objects.
    */
}
