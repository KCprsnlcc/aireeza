const fs = require('fs');
const path = require('path');

const files = [
    'src/components/sections/AboutStrip.tsx',
    'src/components/sections/ServicesPreview.tsx',
    'src/components/sections/CaseStudyPreview.tsx',
    'src/components/sections/WritingPreview.tsx',
    'src/components/sections/CTABanner.tsx',
    'src/components/sections/InnerHero.tsx',
    'src/app/about/page.tsx',
    'src/app/services/page.tsx',
    'src/app/work/page.tsx',
    'src/app/writing/page.tsx',
    'src/app/speaking/page.tsx'
];

files.forEach(file => {
    const fullPath = path.join('c:\\xampp\\htdocs\\aireeza', file);
    if (!fs.existsSync(fullPath)) return;

    let content = fs.readFileSync(fullPath, 'utf8');
    const lines = content.split('\n');
    const newLines = lines.map(line => {
        // Replace font-majesty with font-bold tracking-tight
        // unless the line contains "Aireeza"
        if (line.includes('font-majesty') && !line.toLowerCase().includes('aireeza')) {
            return line.replace(/font-majesty/g, 'font-bold tracking-tight');
        }
        return line;
    });

    fs.writeFileSync(fullPath, newLines.join('\n'), 'utf8');
});

console.log('Fonts updated successfully.');
