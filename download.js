import fs from 'fs';
const res = await fetch('https://1000logos.net/wp-content/uploads/2022/06/Ajio-Logo.png', {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Referer': 'https://1000logos.net/'
    }
});
const buf = await res.arrayBuffer();
const base64 = Buffer.from(buf).toString('base64');
fs.writeFileSync('ajio_logo.txt', 'data:image/png;base64,' + base64);
console.log('Saved');
