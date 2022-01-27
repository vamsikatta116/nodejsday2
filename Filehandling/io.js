const os = require("os")
const path = require("fs")
// 1 
/*var obj = [{uptime:os.uptime(),os_type:os.type(),os_maxmemory:os.totalmem(),os_freememory:os.freemem(),arch:os.arch(),netoworkinterface:os.networkInterfaces(),CPU_logical:os.cpus() }]
path.writeFileSync("story5.txt",JSON.stringify(obj))
console.log(path.readFileSync("story5.txt","utf-8"))

//2
console.log(path.readFileSync("story.txt","utf-8"))
*/
//3

var f1 = path.readFileSync("story5.txt","utf-8")
var f2 = path.readFileSync("story.txt","utf-8")
path.writeFileSync("story7.txt",f1+f2)