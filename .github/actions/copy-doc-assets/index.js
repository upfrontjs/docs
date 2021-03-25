const path = require('path');
const fs = require('fs');

const cwd = process.cwd();
const docsPath = path.resolve(cwd + path.sep + 'framework' + path.sep + 'docs');

if (!fs.existsSync(docsPath)) {
    throw new Error('The documentation is not found at: ' + docsPath);
}

copyDir(docsPath, path.resolve(cwd + path.sep + 'docs'));

function copyDir(src, dest) {
    fs.mkdirSync(dest, { recursive: true });
    let entries = fs.readdirSync(src, { withFileTypes: true });

    for (let entry of entries) {
        let srcPath = path.join(src, entry.name);
        let destPath = path.join(dest, entry.name);

        entry.isDirectory() ?
            copyDir(srcPath, destPath) :
            fs.copyFileSync(srcPath, destPath);
    }
}
