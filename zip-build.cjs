const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

const output = fs.createWriteStream(path.join(__dirname, 'Express-MVP-Linux-Ready.zip'));
const archive = archiver('zip', {
    zlib: { level: 9 }
});

output.on('close', function () {
    console.log('Zip complete: ' + archive.pointer() + ' total bytes');
});

archive.on('error', function (err) {
    throw err;
});

archive.pipe(output);

function addDirectoryToArchive(dirPath, zipBasePath) {
    const items = fs.readdirSync(dirPath);

    for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        // Explicitly enforce posix forward-slashes for the zip entry name
        const zipName = (zipBasePath ? zipBasePath + '/' + item : item).replace(/\\/g, '/');

        if (stat.isDirectory()) {
            addDirectoryToArchive(fullPath, zipName);
        } else {
            archive.file(fullPath, { name: zipName });
        }
    }
}

// Build the dist directory recursively enforcing forward slashes
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
    addDirectoryToArchive(distPath, '');
} else {
    console.error("Dist directory not found! Run npm run build first.");
}

archive.finalize();
