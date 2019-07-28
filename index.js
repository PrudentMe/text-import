var fs = require('fs');
let encode = require('@prudent/encode');

exports.start = function (callback) {
    try {
        if (process.argv[2] !== undefined) {
            callback(fs.readFileSync(process.argv[2], 'utf8'));
        } else {
            process.stdin.setEncoding('utf8');
            process.stdin.on('readable', () => {
                    const input = process.stdin.read();
                    if (input !== null) {
                        let object = JSON.parse(input);
                        if (object.name === 'file') {
                            callback(fs.readFileSync(object.content, 'utf8'));
                        }
                    }
            });    
        }
    } catch (e) {
        console.log(encode.protocol('error', e.message));
    }
}
