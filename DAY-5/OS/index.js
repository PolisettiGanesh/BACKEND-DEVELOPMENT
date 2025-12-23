console.log("OS MODULE")
// ---------------------------------------------------
/*
{
  const os = require('os');
  console.log(os.platform()); // win32

 }
*/
 //-------------------------------------------------------------
 /*
 {
  const os = require('node:os') // recommended
  if (os.platform() === "win32") {
    console.log("Run Windows specific command");
}
 }
*/
//---------------------------------------------------------------
/*
{
  const os = require('node:os')
  console.log(os.type()) // type() is “OS identity”
  console.log(os.platform())//platform() is  “Node platform tag”.
}
*/
//-----------------------------------------------------------
/*
{
  const os = require('os');
  console.log(os.release()); //  windows build version and linux kernal version used for debugging in cloud servers
  console.log(os.arch()) // x64
  console.log(os.hostname()); //Acer-v
  console.log(os.userInfo());
  console.log(os.homedir());
  console.log(os.tmpdir());
}
*/
//------------------------------------------------------------------
/*
{
  const os = require('node:os');
  // these are in the form of bytes
  console.log(os.totalmem());
  console.log(os.freemem());

  //converted this bytes into gb
  console.log((os.freemem()/1024/1024/1024).toFixed(2));
  console.log((os.totalmem()/1024/1024/1024).toFixed(2));
 //                      /1024    /1024  /1024
  // 1686935142 - bytes ---> KB ---> MB ---> GB
  // 2963165184 - bytes ---> KB ---> MB ---> GB
}
*/
//------------------------------------------------------------
/*
{
   const os = require('node:os');
  const formatBytes = (bytes) => {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let i = 0;
  let num = bytes;

  while (num >= 1024 && i < units.length - 1) {
    num /= 1024;
    i++;
  }
  return `${num.toFixed(2)} ${units[i]}`;
};

console.log("Total:", formatBytes(os.totalmem()));
console.log("Free :", formatBytes(os.freemem()));

}
*/
//--------------------------------------------------------
/*
{
  const os = require("node:os");
  const total = os.totalmem();
  const free = os.freemem();
  const used = total - free
  const usedPercent = ((used/total)*100).toFixed(2);
  console.log(usedPercent,"%");
}
*/
//------------------------------------------------------------
/*
{
  const os = require('node:os');
  console.log(os.cpus());
  console.log(os.cpus().length);
  console.log(os.cpus()[0].model);
  console.log(os.cpus()[0].speed);
}
  */
//----------------------------------------------------------
/*
{
const os = require('node:os');
console.log(os.cpus()[0].times);
const {times} = os.cpus()[0];
console.log(times.user);
console.log(times.idle);
}
*/
//---------------------------------------------------------
/*
{
  const os = require('node:os');
  console.log(os.uptime()); //in seconds
  let sec = os.uptime();
  const hours = (sec/3600).toFixed(2);
  console.log(hours);

}
 */
//---------------------------------------------------------------
{
const os = require('node:os');
console.log(os.loadavg()); // [1min, 5min, 15min] load average
const load = os.loadavg()[0];
const cores = os.cpus().length;
if(load>cores){
  console.log("system overloaded !");
}
else{
  console.log("system ok bro !");
}
}
//------------------------------------------------
{
  const os = require('node:os');

const nets = os.networkInterfaces();
console.log(nets);

console.log(JSON.stringify(os.EOL));
const line = `Hello${os.EOL}World`;
console.log(line);

console.log(os.constants);

}
//------------------------------------------------------------------
{
  const os = require("os");

const formatBytes = (bytes) => {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let i = 0, num = bytes;
  while (num >= 1024 && i < units.length - 1) {
    num /= 1024;
    i++;
  }
  return `${num.toFixed(2)} ${units[i]}`;
};

console.log("===== SYSTEM REPORT =====");
console.log("Platform :", os.platform());
console.log("Type     :", os.type());
console.log("Release  :", os.release());
console.log("Arch     :", os.arch());
console.log("Hostname :", os.hostname());

console.log("CPU Cores:", os.cpus().length);
console.log("CPU Model:", os.cpus()[0].model);

console.log("Total RAM:", formatBytes(os.totalmem()));
console.log("Free RAM :", formatBytes(os.freemem()));
console.log("Uptime   :", (os.uptime() / 3600).toFixed(2), "hours");

console.log("Home Dir :", os.homedir());
console.log("Temp Dir :", os.tmpdir());
console.log("=========================");

}
