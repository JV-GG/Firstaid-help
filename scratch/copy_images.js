const fs = require('fs');
const path = require('path');

const ARTIFACTS_DIR = '/Users/jvs/.gemini/antigravity-ide/brain/59a3d82b-b57f-421d-9b38-925f4f1b3caa';
const DEST_DIR = '/Users/jvs/Portfolio/Firstaid-help/public/images/steps';
const MISSING_JSON_PATH = '/Users/jvs/Portfolio/Firstaid-help/scratch/missing_images.json';

function run() {
  if (!fs.existsSync(MISSING_JSON_PATH)) {
    console.error('missing_images.json not found!');
    return;
  }

  const missing = JSON.parse(fs.readFileSync(MISSING_JSON_PATH, 'utf8'));
  const files = fs.readdirSync(ARTIFACTS_DIR);

  let copyCount = 0;

  for (const item of missing) {
    const { categorySlug, typeId, stepNumber, fileName } = item;
    
    // Normalization: replace hyphens with underscores
    const normCategory = categorySlug.replace(/-/g, '_');
    const normType = typeId.replace(/-/g, '_');
    
    // We expect filenames like normCategory_normType_stepNumber_timestamp.png
    // e.g., bleeding_wounds_severe_bleeding_step5_1781679863044.png
    const prefix = `${normCategory}_${normType}_step${stepNumber}_`;
    
    // Find matching files
    const matches = files.filter(f => f.startsWith(prefix) && f.endsWith('.png'));
    if (matches.length > 0) {
      // Sort to get the latest (highest timestamp)
      matches.sort();
      const latestFile = matches[matches.length - 1];
      const srcPath = path.join(ARTIFACTS_DIR, latestFile);
      const destPath = path.join(DEST_DIR, fileName);
      
      console.log(`Copying: ${latestFile} -> ${fileName}`);
      fs.copyFileSync(srcPath, destPath);
      copyCount++;
    }
  }

  console.log(`Done. Copied ${copyCount} files.`);
}

run();
