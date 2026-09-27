import {readFileSync,existsSync} from 'node:fs';
import assert from 'node:assert/strict';
const pages=['index','about','contact','privacy','terms','404'];
for(const name of pages){const html=readFileSync(`dist/${name}.html`,'utf8');assert.equal((html.match(/<h1>/g)||[]).length,1);assert.match(html,/<title>.+Timefusions<\/title>/);assert.match(html,/rel="canonical"/);for(const m of html.matchAll(/(?:href|src)="(\/[^"#]*)/g)){const p=m[1];if(p==='/')continue;assert(existsSync('dist'+p)||existsSync('dist'+p+'.html'),`Missing internal target ${p}`)}}
const home=readFileSync('dist/index.html','utf8');for(const app of ['audiolift','clipturn','clearcut','tempo','bodymetric'])assert(home.includes(`https://${app}.timefusionsidk.com`));
assert(!home.includes('G-WRK3R3D5NE'));assert(!home.includes('googletagmanager.com'));assert(readFileSync('dist/analytics.js','utf8').includes('G-F653VYXS68'));
const xml=readFileSync('dist/sitemap.xml','utf8');assert.equal((xml.match(/<url>/g)||[]).length,5);assert(!xml.includes('/404'));assert(readFileSync('dist/robots.txt','utf8').includes('https://timefusionsidk.com/sitemap.xml'));
console.log('PASS: all six pages, internal links, five tool destinations, metadata, consent-gated tag and sitemap checks.');
