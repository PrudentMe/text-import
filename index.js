var fs = require('fs');
let encode = require('@prudent/encode');

exports.start = function (callback) {

    process.stdin.setEncoding('utf8');
    process.stdin.on('readable', () => {

        try {
            const input = process.stdin.read();
            if (input !== null) {
                let object = JSON.parse(input);
                if (object.name === 'file') {
                    callback(fs.readFileSync(object.content, 'utf8'));
                }
            } else if (process.argv[2] !== null) {
                callback(fs.readFileSync(process.argv[2], 'utf8'));
            }
        } catch (e) {
            console.log(encode.protocol('error', e.message));
        }

    });
    
}
