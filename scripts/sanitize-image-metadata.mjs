import fs from 'node:fs';
const directory='public/images';let changed=0;
for(const name of fs.readdirSync(directory)){
const path=`${directory}/${name}`;const b=fs.readFileSync(path);let result=b;
if(b[0]===255 && b[1]===216){
if(b[0]!==255||b[1]!==216)throw Error('Invalid JPEG '+name);
const chunks=[b.subarray(0,2)];let p=2;
while(p<b.length){const start=p;if(b[p++]!==255)throw Error('Invalid marker '+name);while(b[p]===255)p++;const marker=b[p++];if(marker===0xda||marker===0xd9){chunks.push(b.subarray(start));break;}if(marker===0x01||(marker>=0xd0&&marker<=0xd7)){chunks.push(b.subarray(start,p));continue;}const length=b.readUInt16BE(p);if(length<2||p+length>b.length)throw Error('Invalid segment '+name);const end=p+length;
if(marker===0xe1 && b.toString('ascii',p+2,p+8)==='Exif\0\0'){
 const t=p+8;const little=b.toString('ascii',t,t+2)==='II';const u16=o=>little?b.readUInt16LE(o):b.readUInt16BE(o);const u32=o=>little?b.readUInt32LE(o):b.readUInt32BE(o);const ifd=t+u32(t+4);if(ifd+2<end){const count=u16(ifd);for(let i=0;i<count;i++){const tag=ifd+2+i*12;if(tag+12>end)break;if(u16(tag)===0x0112&&u16(tag+2)===3&&u32(tag+4)===1&&u16(tag+8)!==1)throw Error('Orientation needs review '+name);}}
}
if(![0xe1,0xed,0xfe].includes(marker))chunks.push(b.subarray(start,end));p=end;
}result=Buffer.concat(chunks);
}else if(b.toString('ascii',1,4)==='PNG'){
const chunks=[b.subarray(0,8)];let p=8;while(p<b.length){const length=b.readUInt32BE(p),type=b.toString('ascii',p+4,p+8),end=p+length+12;if(end>b.length)throw Error('Invalid PNG '+name);if(!['eXIf','tEXt','zTXt','iTXt','tIME'].includes(type))chunks.push(b.subarray(p,end));p=end;}result=Buffer.concat(chunks);
}
if(b.toString('ascii',0,4)==='RIFF' && b.toString('ascii',8,12)==='WEBP'){
 const chunks=[];let p=12;while(p<b.length){const length=b.readUInt32LE(p+4),type=b.toString('ascii',p,p+4),end=p+8+length+(length%2);if(end>b.length)throw Error('Invalid WebP '+name);if(!['EXIF','XMP '].includes(type)){const chunk=Buffer.from(b.subarray(p,end));if(type==='VP8X')chunk[8]&=~0x0c;chunks.push(chunk);}p=end;}const header=Buffer.from(b.subarray(0,12));result=Buffer.concat([header,...chunks]);result.writeUInt32LE(result.length-8,4);
}

if(!result.equals(b)){fs.writeFileSync(path,result);changed++;}
}
console.log(`Removed private metadata from ${changed} image files; retained compressed image data.`);
