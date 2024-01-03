#!/usr/bin/env node
import{execSync}from"child_process";import fs from"fs";import{fileURLToPath}from"url";import path from"path";import chalk from"chalk";import prompts from"prompts";const __filename=fileURLToPath(import.meta.url),__dirname=path.dirname(__filename);async function createDirectoryStructure(e,s){const r=["./src/app/_trpc","./src/app/api/trpc/[trpc]","./src/server/routers"];if(s.prisma){r.push("./prisma","./src/lib");const s=path.join(e,"package.json"),t=JSON.parse(fs.readFileSync(s,"utf8")),c=t.dependencies,i=t.devDependencies;delete t.dependencies,delete t.devDependencies,t.prisma={seed:"node prisma/seed.js"},t.dependencies=c,t.devDependencies=i,fs.writeFileSync(s,JSON.stringify(t,null,2))}r.forEach((e=>fs.mkdirSync(e,{recursive:!0})));const t=[{src:"/codes/src/app/_trpc/client.ts",dest:"/src/app/_trpc/client.ts"},{src:"/codes/src/app/_trpc/Provider.tsx",dest:"/src/app/_trpc/Provider.tsx"},{src:"/codes/src/app/_trpc/serverClient.ts",dest:"/src/app/_trpc/serverClient.ts"},{src:"/codes/src/app/api/trpc/[trpc]/route.ts",dest:"/src/app/api/trpc/[trpc]/route.ts"},{src:"/codes/src/server/index.ts",dest:"/src/server/index.ts"},{src:"/codes/src/server/trpc.ts",dest:"/src/server/trpc.ts"},{src:"/codes/src/app/layout.tsx",dest:"/src/app/layout.tsx"}];s.prisma&&t.push({src:"/codes/src/lib/prisma.ts",dest:"/src/lib/prisma.ts"},{src:"/codes/prisma/seed.js",dest:"/prisma/seed.js"}),s.zod&&t.push({src:"/codes/src/lib/models.ts",dest:"/src/lib/models.ts"},{src:"/codes/src/lib/types.ts",dest:"/src/lib/types.ts"}),s.zod&&s.prisma&&t.push({src:"/codes/prisma/schema.prisma",dest:"/prisma/schema.prisma"},{src:"/codes/src/server/routers/user.ts",dest:"/src/server/routers/user.ts"}),t.forEach((({src:s,dest:r})=>{const t=path.join(__dirname,s),c=path.join(e,r),i=fs.readFileSync(t,"utf8");fs.writeFileSync(c,i)}))}async function getAnswer(){const e=[{type:"text",name:"projectName",message:"What is your project named?",initial:"my-app"},{type:"toggle",name:"prisma",message:`Would you like to use ${chalk.blue("Prisma")}?`,initial:!0,active:"Yes",inactive:"No"},{type:"toggle",name:"zod",message:`Would you like to use ${chalk.blue("Zod")}?`,initial:!0,active:"Yes",inactive:"No"},{type:"toggle",name:"react-hook-form",message:`Would you like to use ${chalk.blue("react-hook-form")}?`,initial:!0,active:"Yes",inactive:"No"}],s=await prompts(e);return{projectName:s.projectName.trim().replace(/ /g,"-"),prisma:s.prisma,zod:s.zod,reactHookForm:s["react-hook-form"]}}async function main(){try{const e=await getAnswer();execSync(`npx create-next-app@latest ${e.projectName} --ts --app --src-dir --import-alias @/*`,{stdio:"inherit"});const s=path.join(process.cwd(),e.projectName);process.chdir(e.projectName);const r=["@trpc/client","@trpc/server","@trpc/react-query","@tanstack/react-query","decimal.js","superjson"];e.prisma&&r.push("prisma","@prisma/client"),e.zod&&r.push("zod"),e.reactHookForm&&r.push("react-hook-form","@hookform/resolvers"),r.forEach((e=>{})),execSync(`npm install ${r.join(" ")}`,{stdio:"inherit"}),e.prisma&&execSync("npx prisma init",{stdio:"inherit"}),await createDirectoryStructure(s,e)}catch(e){process.exit(1)}}main();