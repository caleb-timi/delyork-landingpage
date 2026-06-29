const fs = require('fs');
let css = fs.readFileSync('public/style.css', 'utf8');

let idx = css.indexOf('/* ==========================================================================\n   GLOBAL RESPONSIVENESS OVERRIDES');
if (idx === -1) {
  idx = css.indexOf('/* ==========================================================================\r\n   GLOBAL RESPONSIVENESS OVERRIDES');
}

if (idx !== -1) {
  css = css.slice(0, idx);
  fs.writeFileSync('public/style.css', css.trim() + '\n');
  console.log('Truncated successfully');
} else {
  console.log('Could not find the block');
}
