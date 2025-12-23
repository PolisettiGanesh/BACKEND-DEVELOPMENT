/*
const fs = require('fs');

console.log('Start reading');
fs.readFile('async.txt', 'utf-8', (error, data) => {
  if (error) {
    console.log('Error happened');
    return;
  }

  console.log('File content:', data);
});

console.log('End of program');
*/
//------------------------------------------------------
/*
const fs = require("fs");

console.log("Start writing");

fs.writeFile("async-write.txt", "Hello async write", (error) => {
  if (error) {
    console.log("Write failed");
    return;
  }

  console.log("File written successfully");
});

console.log("End of program");
*/
//--------------------------------------------------------
/*
const fs = require("fs");

console.log("Start append");

fs.appendFile("async-write.txt", "\nNew log added", (error) => {
  if (error) {
    console.log("Append failed");
    return;
  }

  console.log("Text appended");
});

console.log("End of program");
*/
//---------------------------------------------------
/*
const fs = require('node:fs');
// create a file - async-log.txt; before running this code
fs.appendFile("async-log.txt", "\nLine 1", (err) => {
  if (err) throw err;

  fs.appendFile("async-log.txt", "\nLine 2", (err) => {
    if (err) throw err;

    console.log("Both lines added in order");
  });
});
*/
//-------------------------------------------------------
/*
const fs = require("fs");

fs.writeFile("delete-me.txt", "Bye", () => {
  console.log("File created");
});
*/
//------------------------------------------------------
/*
const fs = require("fs");

console.log("Start delete");

fs.unlink("delete-me.txt", (error) => {
  if (error) {
    console.log("Delete failed");
    return;
  }

  console.log("File deleted successfully");
});

console.log("End of program");
*/
//-------------------------------------------------------
/*
// safe version async delete
const fs = require("fs");

fs.exists("file.txt", (exists) => {
  if (exists) {
    fs.unlink("file.txt", () => {
      console.log("Deleted safely");
    });
  } else {
    console.log("File not found");
  }
});
*/
//-----------------------------------------------------------
/*
const fs = require("fs");

console.log("Start");

fs.mkdir("async-folder", (error) => {
  if (error) {
    console.log("Folder creation failed");
    return;
  }

  console.log("Folder created");
});

console.log("End");
*/
//-------------------------------------------------
/*
const fs = require('fs');

console.log('Start');
fs.mkdir('a/b', { recursive: true }, (error) => {
  if (!error) {
    console.log('Nested folders created');
  }
});
console.log("End");
*/
//-------------------------------------------------------------
/*
const fs = require("fs");

console.log("Start reading folder");

fs.readdir("data", (error, files) => {
  if (error) {
    console.log("Cannot read folder");
    return;
  }

  console.log("Folder content:", files);
});

console.log("End of program");
*/
//--------------------------------------------------------
/*
const fs = require("fs");

console.log("Start reading folder");
fs.readdir("a", (error, files) => {
  if (error) return;

  files.forEach((file) => {
    console.log(file);
  });
});
console.log("End of program");
*/
//---------------------------------------------------------------------
/*
const fs = require("fs");

fs.stat("info.txt", (error, stats) => {
  if (error) {
    console.log("Error getting info");
    return;
  }

  console.log("Is file?", stats.isFile());
  console.log("Is folder?", stats.isDirectory());
  console.log("Size:", stats.size);
});
*/
//--------------------------------------------------------
/*
const fs = require("fs");

fs.readdir("data", (error, items) => {
  if (error) return;

  items.forEach((item) => {
    const path = "data/" + item;

    fs.stat(path, (err, stats) => {
      if (err) return;

      if (stats.isFile()) {
        console.log(item, "is a FILE");
      }

      if (stats.isDirectory()) {
        console.log(item, "is a FOLDER");
      }
    });
  });
});
*/
//-----------------------------------------------------------------
/*
const fs = require("fs");

console.log("Start rename");

fs.rename("async-log.txt", "new-async.txt", (error) => {
  if (error) {
    console.log("Rename failed");
    return;
  }

  console.log("File renamed");
});

console.log("End program");
*/
//------------------------------------------------------
/*
// safe rename habit
const fs = require("fs");

fs.access("file.txt", (err) => {
  if (err) {
    console.log("File not found");
  } else {
    fs.rename("file.txt", "final.txt", () => {
      console.log("Renamed safely");
    });
  }
});
*/
//--------------------------------------------------------------
/*
const fs = require("fs");

fs.mkdir("async-temp/files", { recursive: true }, () => {
  fs.writeFile("async-temp/files/a.txt", "hello", () => {
    console.log("Folder and file created");
  });
});
*/
//----------------------------------------------
/*
const fs = require("fs");

console.log("Start delete folder");

fs.rm("async-temp", { recursive: true }, (error) => {
  if (error) {
    console.log("Delete failed");
    return;
  }

  console.log("Folder deleted");
});

console.log("End program");
*/
//--------------------------------------------------------
// Safe delete habit
const fs = require("fs");

fs.rm("async-temp", { recursive: true, force: true }, () => {
  console.log("Safe delete (no error if missing)");
});
