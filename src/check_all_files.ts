import fs from 'fs';
import path from 'path';

function scanDir(dir, depth = 0) {
  if (depth > 8) return;
  try {
    const list = fs.readdirSync(dir);
    for (const item of list) {
      if (item === 'node_modules' || item === '.git' || item === 'dist' || item === '.npm') continue;
      const fullPath = path.join(dir, item);
      let stat;
      try {
        stat = fs.statSync(fullPath);
      } catch (e) {
        continue;
      }
      if (stat.isDirectory()) {
         scanDir(fullPath, depth + 1);
      } else {
         const name = item.toLowerCase();
         if (name.endsWith('.png') || name.endsWith('.jpg') || name.endsWith('.jpeg') || name.endsWith('.svg') || name.endsWith('.webp') || name.endsWith('.gif') || name.endsWith('.ico')) {
           console.log(`Found image: ${fullPath} (${stat.size} bytes)`);
         }
      }
    }
  } catch (e) {
    // Ignore error
  }
}

console.log("Scanning /app recursively...");
scanDir('/app');
console.log("Scanning /tmp recursively...");
scanDir('/tmp');
console.log("Scan finished.");
