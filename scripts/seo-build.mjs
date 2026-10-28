import fs from 'node:fs';
import {business} from '../src/data/business.mjs';
const paths=['/','/contact/','/services/','/services/modular-buildings/','/services/garden-rooms/','/services/offices/','/services/catering-units/','/services/container-conversions/','/terms-and-conditions/','/privacy-policy/','/cookie-policy/'];
const origin=process.env.SITE_URL || business.site;
if(!origin){fs.writeFileSync('dist/robots.txt','User-agent: *\nDisallow: /\n');if(fs.existsSync('dist/sitemap.xml'))fs.unlinkSync('dist/sitemap.xml');console.log('Local build: indexing disabled. Set SITE_URL for production canonicals and sitemap.');}
else{const site=new URL(origin);const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');fs.writeFileSync('dist/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml',site).href}\n`);fs.writeFileSync('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(p=>`<url><loc>${escape(new URL(p,site).href)}</loc></url>`).join('')}</urlset>`);console.log('Production sitemap and robots generated.');}
