import{mkdirSync,writeFileSync}from"fs";import ora from"ora";import{createIndexFile}from"../createFileContent/index.mjs";export const createParentFolder=(e,r)=>{const t=ora("Writing folder structure...").start();t.start(),mkdirSync(e,{recursive:!0},(e=>{if(e)throw e})),writeFileSync(`${e}/index.ts`,createIndexFile(r)),t.succeed(`${r} created successfully!`)};