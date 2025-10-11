const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceImage = path.join(__dirname, '../static/img/logo-source.png');
const outputDir = path.join(__dirname, '../static');

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

async function generateFavicons() {
  console.log('Generating favicons from:', sourceImage);

  for (const { name, size } of sizes) {
    const outputPath = path.join(outputDir, name);
    await sharp(sourceImage)
      .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toFile(outputPath);
    console.log(`✓ Generated ${name} (${size}x${size})`);
  }

  // Generate favicon.ico from 32x32
  const faviconPath = path.join(outputDir, 'favicon.ico');
  await sharp(sourceImage)
    .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .toFile(faviconPath);
  console.log('✓ Generated favicon.ico');

  console.log('\n✅ All favicons generated successfully!');
}

generateFavicons().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
