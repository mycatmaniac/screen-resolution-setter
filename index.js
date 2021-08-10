const { exec } = require('child_process');

module.exports.setResolution = function(width, height) {
    return new Promise((resolve, reject) => {

        if (!width) {
            reject(new Error("Resolution width is required"));
        }

        if (!height) {
            reject(new Error("Resolution height is required"));
        }

        execFile(`${__dirname}\\bin\\win32\\resolution.exe`, [width, height], {windowsHide: true}, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            }

            resolve();
        });
    });
};