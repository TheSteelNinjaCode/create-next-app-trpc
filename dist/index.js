#!/usr/bin/env node
var __awaiter=this&&this.__awaiter||function(e,s,t,r){return new(t||(t=Promise))((function(c,a){function o(e){try{p(r.next(e))}catch(e){a(e)}}function i(e){try{p(r.throw(e))}catch(e){a(e)}}function p(e){var s;e.done?c(e.value):(s=e.value,s instanceof t?s:new t((function(e){e(s)}))).then(o,i)}p((r=r.apply(e,s||[])).next())}))};import{execSync}from"child_process";import fs from"fs";import{fileURLToPath}from"url";import path from"path";import chalk from"chalk";import prompts from"prompts";const __filename=fileURLToPath(import.meta.url),__dirname=path.dirname(__filename);function updatePackageJson(e){return __awaiter(this,void 0,void 0,(function*(){const s=path.join(e,"package.json"),t=JSON.parse(fs.readFileSync(s,"utf8")),r=Object.assign({postinstall:"prisma generate"},t.scripts);t.scripts=r;const c=t.dependencies,a=t.devDependencies;delete t.dependencies,delete t.devDependencies,t.prisma={seed:'ts-node --compiler-options {"module":"CommonJS"} prisma/seed.ts'},t.dependencies=c,t.devDependencies=a,fs.writeFileSync(s,JSON.stringify(t,null,2))}))}function updateGitignoreFile(e,s){return __awaiter(this,void 0,void 0,(function*(){const t=path.join(e,".gitignore");let r=fs.readFileSync(t,"utf8");s.forEach((e=>{r.includes(e)||(r+=`\n${e}`)})),fs.writeFileSync(t,r)}))}function updateOrCreateEnvFile(e,s){return __awaiter(this,void 0,void 0,(function*(){const t=path.join(e,".env");let r=fs.existsSync(t)?fs.readFileSync(t,"utf8"):"";r+=`${""!==r?"\n\n":""}${s}`,fs.writeFileSync(t,r)}))}function createDirectoryStructure(e,s){return __awaiter(this,void 0,void 0,(function*(){const t=[],r=["./src/app/_trpc","./src/app/api/trpc/[trpc]","./src/server/routers"];s.prisma&&(r.push("./prisma","./src/lib"),yield updatePackageJson(e),t.push("\n# Prisma\n.env")),s.zod&&r.push("./src/lib"),s.nextAuth&&r.push("./src/app/_context","./src/app/api/auth/[...nextauth]","./src/app/dashboard"),s.zustand&&r.push("./src/app/_stores"),s.zod&&s.reactHookForm&&s.nextAuth&&r.push("./src/app/_components"),r.forEach((s=>fs.mkdirSync(path.join(e,s),{recursive:!0})));const c=[{src:"/codes/src/app/_trpc/client.ts",dest:"/src/app/_trpc/client.ts"},{src:"/codes/src/app/_trpc/TrpcProvider.tsx",dest:"/src/app/_trpc/TrpcProvider.tsx"},{src:"/codes/src/app/_trpc/serverClient.ts",dest:"/src/app/_trpc/serverClient.ts"},{src:"/codes/src/app/api/trpc/[trpc]/route.ts",dest:"/src/app/api/trpc/[trpc]/route.ts"},{src:"/codes/src/server/index.ts",dest:"/src/server/index.ts"},{src:"/codes/src/server/trpc.ts",dest:"/src/server/trpc.ts"},{src:"/codes/src/app/layout.tsx",dest:"/src/app/layout.tsx"}];s.prisma&&c.push({src:"/codes/prisma/schema.prisma",dest:"/prisma/schema.prisma"},{src:"/codes/src/lib/prisma.ts",dest:"/src/lib/prisma.ts"},{src:"/codes/prisma/seed.ts",dest:"/prisma/seed.ts"},{src:"/codes/prisma/seed.ts",dest:"/prisma/seed.ts"}),s.zod&&c.push({src:"/codes/src/lib/models.ts",dest:"/src/lib/models.ts"},{src:"/codes/src/lib/types.ts",dest:"/src/lib/types.ts"}),s.nextAuth&&(c.push({src:"/codes/src/app/api/auth/[...nextauth]/route.ts",dest:"/src/app/api/auth/[...nextauth]/route.ts"},{src:"/codes/src/app/api/auth/[...nextauth]/options.ts",dest:"/src/app/api/auth/[...nextauth]/options.ts"},{src:"/codes/src/middleware.ts",dest:"/src/middleware.ts"},{src:"/codes/src/app/dashboard/page.tsx",dest:"/src/app/dashboard/page.tsx"},{src:"/codes/src/app/_context/AuthProvider.tsx",dest:"/src/app/_context/AuthProvider.tsx"},{src:"/codes/src/app/next-auth-layout.tsx",dest:"/src/app/layout.tsx"},{src:"/codes/next-auth.d.ts",dest:"/next-auth.d.ts"},{src:"/codes/src/server/next-auth-trpc.ts",dest:"/src/server/trpc.ts"},{src:"/codes/src/server/context.ts",dest:"/src/server/context.ts"},{src:"/codes/src/app/api/trpc/[trpc]/next-auth-route.ts",dest:"/src/app/api/trpc/[trpc]/route.ts"},{src:"/codes/src/app/_trpc/na-serverClient.ts",dest:"/src/app/_trpc/serverClient.ts"}),yield updateOrCreateEnvFile(e,"# TODO: Change the NEXTAUTH_SECRET below. This is a template key for Next-auth integration and should be replaced with a unique secret in production.\n\nNEXTAUTH_SECRET=zAU9UVEglC+a/TrovUGo2StGqfdzetHG67RL4P0y9xA="),s.prisma||t.push("\n# next-auth\n.env")),s.zustand&&c.push({src:"/codes/src/app/_stores/useStore.ts",dest:"/src/app/_stores/useStore.ts"}),s.prisma&&s.zod&&c.push({src:"/codes/src/server/routers/user.ts",dest:"/src/server/routers/user.ts"},{src:"/codes/src/server/prisma-zod-rhf-na-index.ts",dest:"/src/server/index.ts"}),s.zod&&s.nextAuth&&c.push({src:"/codes/zod-next-auth.d.ts",dest:"/next-auth.d.ts"},{src:"/codes/src/zod-middleware.ts",dest:"/src/middleware.ts"},{src:"/codes/src/app/api/auth/[...nextauth]/zod-options.ts",dest:"/src/app/api/auth/[...nextauth]/options.ts"}),s.zod&&s.reactHookForm&&s.nextAuth&&c.push({src:"/codes/src/app/_components/UserList.tsx",dest:"/src/app/_components/UserList.tsx"},{src:"/codes/src/app/dashboard/zod-react-hook-form-page.tsx",dest:"/src/app/dashboard/page.tsx"}),s.prisma&&s.nextAuth&&c.push({src:"/codes/prisma/next-auth-schema.prisma",dest:"/prisma/schema.prisma"},{src:"/codes/src/server/context.ts",dest:"/src/server/context.ts"},{src:"/codes/src/server/next-auth-trpc.ts",dest:"/src/server/trpc.ts"},{src:"/codes/src/app/api/auth/[...nextauth]/next-auth-prisma-options.ts",dest:"/src/app/api/auth/[...nextauth]/options.ts"}),s.prisma&&s.zod&&s.nextAuth&&c.push({src:"/codes/src/app/api/auth/[...nextauth]/na-prisma-zod-options.ts",dest:"/src/app/api/auth/[...nextauth]/options.ts"}),s.prisma&&s.zod&&s.reactHookForm&&s.nextAuth&&c.push({src:"/codes/src/server/prisma-zod-rhf-na-index.ts",dest:"/src/server/index.ts"}),yield updateGitignoreFile(e,t),c.forEach((({src:s,dest:t})=>{const r=path.join(__dirname,s),c=path.join(e,t),a=fs.readFileSync(r,"utf8");fs.writeFileSync(c,a)}))}))}function getAnswer(){return __awaiter(this,void 0,void 0,(function*(){const e=[{type:"text",name:"projectName",message:"What is your project named?",initial:"my-app"},{type:"toggle",name:"prisma",message:`Would you like to use ${chalk.blue("Prisma")}?`,initial:!0,active:"Yes",inactive:"No"},{type:"toggle",name:"zod",message:`Would you like to use ${chalk.blue("Zod")}?`,initial:!0,active:"Yes",inactive:"No"},{type:"toggle",name:"react-hook-form",message:`Would you like to use ${chalk.blue("react-hook-form")}?`,initial:!0,active:"Yes",inactive:"No"},{type:"toggle",name:"next-auth",message:`Would you like to use ${chalk.blue("next-auth")}?`,initial:!0,active:"Yes",inactive:"No"},{type:"toggle",name:"zustand",message:`Would you like to use ${chalk.blue("zustand")}?`,initial:!0,active:"Yes",inactive:"No"}],s=()=>!1;try{const t=yield prompts(e,{onCancel:s});return 0===Object.keys(t).length?null:{projectName:String(t.projectName).trim().replace(/ /g,"-"),prisma:t.prisma,zod:t.zod,reactHookForm:t["react-hook-form"],nextAuth:t["next-auth"],zustand:t.zustand}}catch(e){return null}}))}function installDependencies(e,s){return __awaiter(this,void 0,void 0,(function*(){s.forEach((e=>{})),execSync(`npm install ${s.join(" ")}`,{stdio:"inherit",cwd:e})}))}function main(){return __awaiter(this,void 0,void 0,(function*(){try{const e=yield getAnswer();if(null===e)return;execSync(`npx create-next-app@latest ${e.projectName} --ts --app --src-dir --import-alias @/*`,{stdio:"inherit"});const s=path.join(process.cwd(),e.projectName);process.chdir(e.projectName);const t=["@trpc/client","@trpc/server","@trpc/react-query","@tanstack/react-query","decimal.js","superjson"];e.prisma&&t.push("prisma","@prisma/client","bcrypt","@types/bcrypt","ts-node"),e.zod&&t.push("zod"),e.reactHookForm&&t.push("react-hook-form","@hookform/resolvers"),e.nextAuth&&t.push("next-auth"),e.zustand&&t.push("zustand"),e.prisma&&e.nextAuth&&t.push("@auth/prisma-adapter"),yield installDependencies(s,t),e.prisma&&execSync("npx prisma init",{stdio:"inherit"}),yield createDirectoryStructure(s,e)}catch(e){process.exit(1)}}))}main();