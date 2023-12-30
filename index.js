#!/usr/bin/env node
import{execSync}from"child_process";import fs from"fs";import{fileURLToPath}from"url";import path from"path";import chalk from"chalk";import readline from"readline";async function createDirectoryStructure(){const r=fileURLToPath(import.meta.url),t=path.dirname(r);["./src/app/_trpc","./src/app/api/trpc/[trpc]","./src/server/routers"].forEach((r=>{fs.mkdirSync(r,{recursive:!0})}));const e=fs.readFileSync(path.join(t,"./codes/src/app/_trpc/client.ts"),"utf8");fs.writeFileSync("./src/app/_trpc/client.ts",e);const c=fs.readFileSync(path.join(t,"./codes/src/app/_trpc/Provider.tsx"),"utf8");fs.writeFileSync("./src/app/_trpc/Provider.tsx",c);const s=fs.readFileSync(path.join(t,"./codes/src/app/_trpc/serverClient.ts"),"utf8");fs.writeFileSync("./src/app/_trpc/serverClient.ts",s);const a=fs.readFileSync(path.join(t,"./codes/src/app/api/trpc/[trpc]/route.ts"),"utf8");fs.writeFileSync("./src/app/api/trpc/[trpc]/route.ts",a);const p=fs.readFileSync(path.join(t,"./codes/src/server/index.ts"),"utf8");fs.writeFileSync("./src/server/index.ts",p);const i=fs.readFileSync(path.join(t,"./codes/src/server/trpc.ts"),"utf8");fs.writeFileSync("./src/server/trpc.ts",i);const n=fs.readFileSync(path.join(t,"./codes/src/app/layout.tsx"),"utf8");fs.writeFileSync("./src/app/layout.tsx",n)}async function getProjectName(){const r=readline.createInterface({input:process.stdin,output:process.stdout});return new Promise((t=>{r.question(`${chalk.blue("?")} What is your project named? ${chalk.gray("(default: my-app) »")} `,(e=>{r.close(),t(e.trim().replace(/ /g,"-")||"my-app")}))}))}async function main(){try{const r=await getProjectName();execSync(`npx create-next-app@latest ${r} --ts --src-dir --app --import-alias @/*`,{stdio:"inherit"}),process.chdir(r),await createDirectoryStructure();["@trpc/client","@trpc/server","@trpc/react-query","@tanstack/react-query","decimal.js","superjson"].forEach((r=>{})),execSync("npm install @trpc/client @trpc/server @trpc/react-query @tanstack/react-query decimal.js superjson",{stdio:"inherit"})}catch(r){process.exit(1)}}main();