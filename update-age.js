const fs = require('fs');

// IMPORTANT: Replace with your actual birthdate in YYYY-MM-DD format!
const birthDate = new Date('1995-10-27');
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();
const m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  age--;
}

const readmePath = 'README.md';
let readmeContent = fs.readFileSync(readmePath, 'utf8');

// Define your placeholder. It's good practice to wrap the dynamic content
// between two distinct markers so you can replace the whole block.
const startMarker = '<!-- START_AGE -->';
const endMarker = '<!-- END_AGE -->';

const regex = new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`, 'g');
const newAgeBlock = `${startMarker}${age}${endMarker}`;

// Replace the old age block with the new one
readmeContent = readmeContent.replace(regex, newAgeBlock);

fs.writeFileSync(readmePath, readmeContent, 'utf8');
console.log(`Age updated to ${age} in README.md`);
