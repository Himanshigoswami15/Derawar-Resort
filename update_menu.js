const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const startIndex = content.indexOf('const menuData = [');
const endIndex = content.indexOf('];\n\nconst TiltImage') + 2;

const menuDataStr = content.substring(startIndex, endIndex);

let updatedMenuDataStr = menuDataStr.replace(/\{ name: "([^"]+)",/g, (match, name) => {
  const seed = name.replace(/[^a-zA-Z0-9]/g, '');
  return `{ name: "${name}", image: "https://picsum.photos/seed/${seed}/800/600",`;
});

updatedMenuDataStr = updatedMenuDataStr.replace(/    image: "[^"]+",\n/g, '');

content = content.substring(0, startIndex) + updatedMenuDataStr + content.substring(endIndex);

content = content.replace(/<TiltImage src=\{`https:\/\/picsum\.photos\/seed\/\$\{item\.name\.replace\(\/\[\^a-zA-Z0-9\]\/g, ''\)\}\/800\/600`\} alt=\{item\.name\} \/>/g, '<TiltImage src={item.image} alt={item.name} />');

fs.writeFileSync('src/App.tsx', content);
