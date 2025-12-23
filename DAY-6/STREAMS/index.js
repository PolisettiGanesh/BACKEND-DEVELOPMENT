/*
{
const http = require('node:http');

const server = http.createServer((req,res)=>{
console.log("req is coming from \n",
  req.url
);
if(req.url!=='/'){
  res.end();
}
})

const PORT = process.env.PORT || 5700;
server.listen(PORT,()=>{
  console.log(`listening on port ${PORT}`);
})
}
*/
//----------------------------------------------------------------
/*{
const http = require('node:http');
const fs = require('node:fs');
const { dirname } = require('node:path');
const server = http.createServer((req, res) => {
  if (req.url !== '/') {
    return res.end();
  }
  const filePath = path.join(__dirname,'../sample.txt')
  const file = fs.readFileSync(filePath);
  return res.end(file);
});

const PORT = process.env.PORT || 5700;
server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
}
*/
//-------------------------------------------------------------------
/*{
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const server = http.createServer((req, res) => {
  console.log("REQ:", req.url);

  if (req.url !== "/") {
    res.writeHead(404);
    return res.end("Not Found");
  }
  //Bad Way of downlaoding big file
  const filePath = path.join(__dirname, "../sample.txt");
  const file = fs.readFileSync(filePath);

  res.writeHead(200, { "Content-Type": "text/plain" });
  return res.end(file);
});

server.listen(5700, () => {
  console.log("Listening on port 5700");
});
}
*/
//---------------------------------------------------------------------
/*
{
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const server = http.createServer((req,res)=>{
  if(req.url!=='/'){
    return res.end();
  }
  const filePath = path.join(__dirname,'../sample.txt');
  const readablestream = fs.createReadStream(filePath);
    readablestream.pipe(res);

})
const PORT = process.env.PORT || 5700;
server.listen(PORT,()=>{
  console.log(`server is listening on ${PORT},`);
})
}
*/
//-----------------------------------------------------------------
/*{
  const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const server = http.createServer((req, res) => {
  console.log("REQ:", req.url);

  // 1) Route filter: allow only '/'
  if (req.url !== "/") {
    res.writeHead(404, { "Content-Type": "text/plain" });
    return res.end("404 Not Found");
  }

  // 2) Build safe absolute path (never rely on ../ directly)
  const filePath = path.join(__dirname, "../sample.txt");

  // 3) Set headers before streaming
  res.writeHead(200, { "Content-Type": "text/plain" });

  // 4) Create readable stream (does NOT load full file)
  const readStream = fs.createReadStream(filePath, {
    encoding: "utf-8", // optional: send text instead of Buffer
  });

  // 5) If stream fails (file missing etc.)
  readStream.on("error", (err) => {
    console.log("File read error:", err.message);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("500 Server Error");
  });

  // 6) Pipe stream to response (Readable -> Writable)
  readStream.pipe(res);
});

const PORT = process.env.PORT || 5700;
server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

}
*/
//-----------------------------------------------------------------
/*{
  //Bad way for video.mp4 at once we load ram explosion danger
  const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  const video = fs.readFileSync("video.mp4");

  res.writeHead(200, { "Content-Type": "video/mp4" });
  res.end(video);
}).listen(5700);

}
*/
//-----------------------------------------------------
/*
{
  //Good way simple
  const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "video/mp4" });

  fs.createReadStream("video.mp4").pipe(res);
}).listen(5700);

}
*/
//--------------------------------------------------------
/*
{
  //Bad way Full version code
  const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const server = http.createServer((req, res) => {
  if (req.url !== "/") {
    return res.end();
  }

  const videoPath = path.join(__dirname, "../video.mp4");

  // ❌ BAD: loads entire video into memory
  const video = fs.readFileSync(videoPath);

  res.writeHead(200, { "Content-Type": "video/mp4" });
  return res.end(video);
});

server.listen(5700, () => {
  console.log("BAD video server running on 5700");
});

}
*/
//-----------------------------------------------------------
/*
{
  //Good way full version
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const server = http.createServer((req, res) => {
  if (req.url !== "/") {
    res.writeHead(404);
    return res.end("Not Found");
  }

  const videoPath = path.join(__dirname, "../video.mp4");

  res.writeHead(200, {
    "Content-Type": "video/mp4",
  });

  const videoStream = fs.createReadStream(videoPath);

  videoStream.on("error", (err) => {
    console.log("Video error:", err.message);
    res.writeHead(500);
    res.end("Server Error");
  });

  videoStream.pipe(res);
});

server.listen(5700, () => {
  console.log("GOOD video server running on 5700");
});

}
*/
//-------------------------------------------------------------
/*{
  //copy big file using bad way
  const http = require('node:http');
  const fs = require('node:fs');
  const path = require('node:path');

  const server = http.createServer((req, res) => {
    if (req.url !== '/') {
      return res.end();
    }
    const filePath = path.join(__dirname, '../sample.txt');
    const readFile = fs.readFileSync(filePath);
    fs.writeFileSync('output.txt', readFile);
    res.end();
  });
  const PORT = process.env.PORT || 5700;
  server.listen(PORT, () => {
    console.log(`server is listening on ${PORT},`);
  });
}
*/
//-------------------------------------------------------
/*
{
  //copy big file using Good way
  const http = require('node:http');
  const fs = require('node:fs');
  const path = require('node:path');

  const server = http.createServer((req, res) => {
    if (req.url !== '/') {
      return res.end();
    }
    const filePath = path.join(__dirname, '../sample.txt');
    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream('output.txt');
    readStream.on('data', (chunk) => {
      // console.log("chunk in binary format --> ",chunk);// binary raw data
      console.log('chunk in string format --> ', chunk.toString()); //string format
      writeStream.write(chunk);
    });
    res.end();
  });
  const PORT = process.env.PORT || 5700;
  server.listen(PORT, () => {
    console.log(`server is listening on ${PORT},`);
  });
}
*/
//-------------------------------------------------------------------
/*{
//Good way of copying big file
const fs = require("node:fs");
const path = require("node:path");

// source file
const sourcePath = path.join(__dirname, "../bigfile.bin");

// destination file
const destPath = path.join(__dirname, "../bigfile_copy_good.bin");

console.log("Starting GOOD copy...");

// ✅ Create readable stream (source)
const readStream = fs.createReadStream(sourcePath);

// ✅ Create writable stream (destination)
const writeStream = fs.createWriteStream(destPath);

// ✅ Pipe data from source → destination
readStream.pipe(writeStream);

// ✅ When writing finishes
writeStream.on("finish", () => {
  console.log("GOOD copy finished");
});

// ✅ Handle errors
readStream.on("error", (err) => {
  console.log("Read error:", err.message);
});

writeStream.on("error", (err) => {
  console.log("Write error:", err.message);
});

}
*/
//----------------------------------------------------------------------
/*{
// Bad way of copying big file
const fs = require("node:fs");
const path = require("node:path");

// source file (big file)
const sourcePath = path.join(__dirname, "../bigfile.bin");

// destination file
const destPath = path.join(__dirname, "../bigfile_copy_bad.bin");

console.log("Starting BAD copy...");

// ❌ Loads entire file into memory
const fileData = fs.readFileSync(sourcePath);

// ❌ Writes entire buffer at once
fs.writeFileSync(destPath, fileData);

console.log("BAD copy finished");

}
*/
