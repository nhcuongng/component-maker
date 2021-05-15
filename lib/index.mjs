#!/usr/bin/env node
import chalk from"chalk";import{setup,createParentFolder,createChildFolder,setupChildFolder}from"./scripts/index.mjs";import{name,ComponentType}from"./constant.mjs";(async()=>{console.log(`\n${chalk.magentaBright(name)}`);try{const{folderDirectory:e,folderType:o}=await setup(),r=`${process.cwd()}/${e}`;console.log(r,"current");const t=e.split("/").slice(-1)[0];if(o===ComponentType.small)return void createChildFolder(r,t);const{childFolderName:l}=await setupChildFolder(),c=`${r}/${l}`;createParentFolder(r,l),createChildFolder(c,l)}catch(e){console.error(e.message)}})();