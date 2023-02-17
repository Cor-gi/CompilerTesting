const { fromString, fromFile, getCompilers } = require('wandbox-api-updated')
const prompt = require('prompt-sync')()
 
code = prompt('What is your code? => ')
version = prompt('What version do you want to use? => ')

fromString({
    code: code,
    compiler: version,
    save: true
}).then((message) => {
    console.log('\nCompiler Output: '+message.program_output+'Compiler Error: '+message.program_error+'\nURL: '+message.url+'\n')
}).catch(console.error);
 
//console.log("Hello World!")
//nodejs-10.24.1
//getCompilers("javascript").then(console.log).catch(console.error);