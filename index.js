const { execFile } = require('child_process');
const os = require('os');

module.exports.setResolution = function(width, height) {
    return new Promise((resolve, reject) => {
        if (os.platform() !== "win32") {
            reject(new Error("Platform not supported"));
        }


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