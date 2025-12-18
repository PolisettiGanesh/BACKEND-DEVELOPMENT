🚀 WHAT ARE MODULES IN NODE.JS?
---------------------------------------
👉 In Node.js, every file is a module.

 -->   A module is a reusable block of code whose variables & functions
       are private by default.

Why modules exist:
         1. Code reusability
         2. Maintainability
         3. Encapsulation
         4.Scalability (large projects)

🧠 MODULE SYSTEM IN NODE.JS
-------------------------------
 --> Node.js uses CommonJS Module System (default).

Key keywords:
----------------
                require() → import
                module.exports → export
                exports → shorthand export

1️⃣ TYPES OF MODULES IN NODE.JS
--------------------------------------
--> Node.js has 3 types of modules:

✅ 1. CORE MODULES (Built-in)
---------------------------

 -->  Provided by Node.js itself.

Examples:
                  fs → File system
                  http → Server
                  path → Path handling
                  os → System info
                  events → Event handling

Example:
          const fs = require("fs");
          fs.writeFileSync("test.txt", "Hello Node");

📌 No installation required.

✅ 2. LOCAL (CUSTOM) MODULES
------------------------------

-->   Modules created by you.

        📁 File structure
        math.js
        app.js

math.js
----------
function add(a, b) {
  return a + b;
}

module.exports = add;
-----------------------------------------------------
app.js
--------
const add = require("./math");
console.log(add(5, 3));

------------------------------------------------
📌 ./ is mandatory for local modules.

✅ 3. THIRD-PARTY MODULES (NPM)
--------------------------------------

-->   Installed via npm.

Example:
        npm install express
        const express = require("express");

Examples:
-------------
                  express
                  mongoose
                  dotenv
                  axios
                  lodash

2️⃣ HOW require() WORKS INTERNALLY
-------------------------------
When Node sees:
              require("./math");

Node follows this order:
              Check core module
              Check file (.js, .json, .node)
              Check folder → index.js
              Check node_modules

📌 This process is called Module Resolution.
