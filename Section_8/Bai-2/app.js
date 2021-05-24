var fs = require('fs');

let  info = process.argv.slice(3,process.argv.length);
content = info.join(" ");

fs.writeFileSync(process.argv[2], content, function(error, data){
    if (error) {
       throw error;
     }
})




