import { defineConfig } from 'astro/config';
import { business } from './src/data/business.mjs';
const site=process.env.SITE_URL || business.site;
if(site){const u=new URL(site);if(!['http:','https:'].includes(u.protocol)||u.pathname!=='/'||u.search||u.hash)throw new Error('SITE_URL must be the public site origin, e.g. https://your-domain.co.uk');}
export default defineConfig({ output:'static', site, trailingSlash:'always', devToolbar:{enabled:false} });
