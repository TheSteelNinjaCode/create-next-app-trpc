#!/usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { execSync } from "child_process";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import chalk from "chalk";
import prompts from "prompts";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
function updatePackageJson(baseDir) {
    return __awaiter(this, void 0, void 0, function* () {
        const packageJsonPath = path.join(baseDir, "package.json");
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
        const updatedScripts = Object.assign({ postinstall: "prisma generate" }, packageJson.scripts);
        packageJson.scripts = updatedScripts;
        const dependencies = packageJson.dependencies;
        const devDependencies = packageJson.devDependencies;
        delete packageJson.dependencies;
        delete packageJson.devDependencies;
        packageJson.prisma = {
            seed: 'ts-node --compiler-options {"module":"CommonJS"} prisma/seed.ts',
        };
        packageJson.dependencies = dependencies;
        packageJson.devDependencies = devDependencies;
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    });
}
// This function updates the .gitignore file
function updateGitignoreFile(baseDir, additions) {
    return __awaiter(this, void 0, void 0, function* () {
        const gitignorePath = path.join(baseDir, ".gitignore");
        let gitignoreContent = fs.readFileSync(gitignorePath, "utf8");
        additions.forEach((addition) => {
            if (!gitignoreContent.includes(addition)) {
                gitignoreContent += `\n${addition}`;
            }
        });
        fs.writeFileSync(gitignorePath, gitignoreContent);
    });
}
// This function updates or creates the .env file
function updateOrCreateEnvFile(baseDir, content) {
    return __awaiter(this, void 0, void 0, function* () {
        const envPath = path.join(baseDir, ".env");
        let envContent = fs.existsSync(envPath)
            ? fs.readFileSync(envPath, "utf8")
            : "";
        envContent += `${envContent !== "" ? "\n\n" : ""}${content}`;
        fs.writeFileSync(envPath, envContent);
    });
}
function createDirectoryStructure(baseDir, answer) {
    return __awaiter(this, void 0, void 0, function* () {
        const updateGitignore = [];
        const directories = [
            "./src/app/_trpc",
            "./src/app/api/trpc/[trpc]",
            "./src/server/routers",
        ];
        if (answer.prisma) {
            directories.push("./prisma", "./src/lib");
            yield updatePackageJson(baseDir);
            updateGitignore.push("\n# Prisma\n.env");
        }
        if (answer.zod) {
            directories.push("./src/lib");
        }
        if (answer.nextAuth) {
            directories.push("./src/app/_context", "./src/app/api/auth/[...nextauth]", "./src/app/dashboard");
        }
        if (answer.zustand) {
            directories.push("./src/app/_stores");
        }
        if (answer.zod && answer.reactHookForm && answer.nextAuth) {
            directories.push("./src/app/_components");
        }
        directories.forEach((dir) => fs.mkdirSync(path.join(baseDir, dir), { recursive: true }));
        const filesToCopy = [
            { src: "/codes/src/app/_trpc/client.ts", dest: "/src/app/_trpc/client.ts" },
            {
                src: "/codes/src/app/_trpc/TrpcProvider.tsx",
                dest: "/src/app/_trpc/TrpcProvider.tsx",
            },
            {
                src: "/codes/src/app/_trpc/serverClient.ts",
                dest: "/src/app/_trpc/serverClient.ts",
            },
            {
                src: "/codes/src/app/api/trpc/[trpc]/route.ts",
                dest: "/src/app/api/trpc/[trpc]/route.ts",
            },
            { src: "/codes/src/server/index.ts", dest: "/src/server/index.ts" },
            { src: "/codes/src/server/trpc.ts", dest: "/src/server/trpc.ts" },
            { src: "/codes/src/app/layout.tsx", dest: "/src/app/layout.tsx" },
        ];
        if (answer.prisma) {
            filesToCopy.push({
                src: "/codes/prisma/schema.prisma",
                dest: "/prisma/schema.prisma",
            }, {
                src: "/codes/src/lib/prisma.ts",
                dest: "/src/lib/prisma.ts",
            }, {
                src: "/codes/prisma/seed.ts",
                dest: "/prisma/seed.ts",
            }, {
                src: "/codes/prisma/seed.ts",
                dest: "/prisma/seed.ts",
            });
            yield updateOrCreateEnvFile(baseDir, `# For Online Databases, you have to create a new "shadow database" and provide the connection string to it here.
      \n# SHADOW_DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"`);
        }
        if (answer.zod) {
            filesToCopy.push({
                src: "/codes/src/lib/models.ts",
                dest: "/src/lib/models.ts",
            }, {
                src: "/codes/src/lib/types.ts",
                dest: "/src/lib/types.ts",
            });
        }
        if (answer.nextAuth) {
            filesToCopy.push({
                src: "/codes/src/app/api/auth/[...nextauth]/route.ts",
                dest: "/src/app/api/auth/[...nextauth]/route.ts",
            }, {
                src: "/codes/src/app/api/auth/[...nextauth]/options.ts",
                dest: "/src/app/api/auth/[...nextauth]/options.ts",
            }, {
                src: "/codes/src/middleware.ts",
                dest: "/src/middleware.ts",
            }, {
                src: "/codes/src/app/dashboard/page.tsx",
                dest: "/src/app/dashboard/page.tsx",
            }, {
                src: "/codes/src/app/_context/AuthProvider.tsx",
                dest: "/src/app/_context/AuthProvider.tsx",
            }, {
                src: "/codes/src/app/next-auth-layout.tsx",
                dest: "/src/app/layout.tsx",
            }, {
                src: "/codes/next-auth.d.ts",
                dest: "/next-auth.d.ts",
            }, {
                src: "/codes/src/server/next-auth-trpc.ts",
                dest: "/src/server/trpc.ts",
            }, {
                src: "/codes/src/server/context.ts",
                dest: "/src/server/context.ts",
            }, {
                src: "/codes/src/app/api/trpc/[trpc]/next-auth-route.ts",
                dest: "/src/app/api/trpc/[trpc]/route.ts",
            });
            yield updateOrCreateEnvFile(baseDir, `# TODO: Change the NEXTAUTH_SECRET below. This is a template key for Next-auth integration and should be replaced with a unique secret in production.\n\nNEXTAUTH_SECRET=zAU9UVEglC+a/TrovUGo2StGqfdzetHG67RL4P0y9xA="`);
            if (!answer.prisma) {
                updateGitignore.push("\n# next-auth\n.env");
            }
        }
        if (answer.zustand) {
            filesToCopy.push({
                src: "/codes/src/app/_stores/useStore.ts",
                dest: "/src/app/_stores/useStore.ts",
            });
        }
        if (answer.prisma && answer.zod) {
            filesToCopy.push({
                src: "/codes/src/server/routers/user.ts",
                dest: "/src/server/routers/user.ts",
            }, {
                src: "/codes/src/server/prisma-zod-rhf-na-index.ts",
                dest: "/src/server/index.ts",
            });
        }
        if (answer.zod && answer.nextAuth) {
            filesToCopy.push({
                src: "/codes/zod-next-auth.d.ts",
                dest: "/next-auth.d.ts",
            }, {
                src: "/codes/src/zod-middleware.ts",
                dest: "/src/middleware.ts",
            }, {
                src: "/codes/src/app/api/auth/[...nextauth]/zod-options.ts",
                dest: "/src/app/api/auth/[...nextauth]/options.ts",
            });
        }
        if (answer.zod && answer.reactHookForm && answer.nextAuth) {
            filesToCopy.push({
                src: "/codes/src/app/_components/UserList.tsx",
                dest: "/src/app/_components/UserList.tsx",
            }, {
                src: "/codes/src/app/dashboard/zod-react-hook-form-page.tsx",
                dest: "/src/app/dashboard/page.tsx",
            });
        }
        if (answer.prisma && answer.nextAuth) {
            filesToCopy.push({
                src: "/codes/prisma/next-auth-schema.prisma",
                dest: "/prisma/schema.prisma",
            }, {
                src: "/codes/src/server/context.ts",
                dest: "/src/server/context.ts",
            }, {
                src: "/codes/src/server/next-auth-trpc.ts",
                dest: "/src/server/trpc.ts",
            }, {
                src: "/codes/src/app/api/auth/[...nextauth]/next-auth-prisma-options.ts",
                dest: "/src/app/api/auth/[...nextauth]/options.ts",
            });
        }
        if (answer.prisma && answer.zod && answer.nextAuth) {
            filesToCopy.push({
                src: "/codes/src/app/api/auth/[...nextauth]/na-prisma-zod-options.ts",
                dest: "/src/app/api/auth/[...nextauth]/options.ts",
            });
        }
        if (answer.prisma && answer.zod && answer.reactHookForm && answer.nextAuth) {
            filesToCopy.push({
                src: "/codes/src/server/prisma-zod-rhf-na-index.ts",
                dest: "/src/server/index.ts",
            });
        }
        yield updateGitignoreFile(baseDir, updateGitignore);
        filesToCopy.forEach(({ src, dest }) => {
            const sourcePath = path.join(__dirname, src);
            const destPath = path.join(baseDir, dest);
            const code = fs.readFileSync(sourcePath, "utf8");
            fs.writeFileSync(destPath, code);
        });
    });
}
function getAnswer() {
    return __awaiter(this, void 0, void 0, function* () {
        const questions = [
            {
                type: "text",
                name: "projectName",
                message: "What is your project named?",
                initial: "my-app",
            },
            {
                type: "toggle",
                name: "prisma",
                message: `Would you like to use ${chalk.blue("Prisma")}?`,
                initial: true,
                active: "Yes",
                inactive: "No",
            },
            {
                type: "toggle",
                name: "zod",
                message: `Would you like to use ${chalk.blue("Zod")}?`,
                initial: true,
                active: "Yes",
                inactive: "No",
            },
            {
                type: "toggle",
                name: "react-hook-form",
                message: `Would you like to use ${chalk.blue("react-hook-form")}?`,
                initial: true,
                active: "Yes",
                inactive: "No",
            },
            {
                type: "toggle",
                name: "next-auth",
                message: `Would you like to use ${chalk.blue("next-auth")}?`,
                initial: true,
                active: "Yes",
                inactive: "No",
            },
            {
                type: "toggle",
                name: "zustand",
                message: `Would you like to use ${chalk.blue("zustand")}?`,
                initial: true,
                active: "Yes",
                inactive: "No",
            },
        ];
        const onCancel = () => {
            return false;
        };
        try {
            const response = yield prompts(questions, { onCancel });
            if (Object.keys(response).length === 0) {
                return null;
            }
            return {
                projectName: String(response.projectName).trim().replace(/ /g, "-"),
                prisma: response.prisma,
                zod: response.zod,
                reactHookForm: response["react-hook-form"],
                nextAuth: response["next-auth"],
                zustand: response.zustand,
            };
        }
        catch (error) {
            console.error(chalk.red("Prompt error:"), error);
            return null;
        }
    });
}
// This function handles the installation of dependencies
function installDependencies(baseDir, dependencies) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Installing optional dependencies:");
        dependencies.forEach((dep) => console.log(`- ${chalk.blue(dep)}`));
        execSync(`npm install ${dependencies.join(" ")}`, {
            stdio: "inherit",
            cwd: baseDir,
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const answer = yield getAnswer();
            if (answer === null) {
                console.log(chalk.red("Installation cancelled."));
                return;
            }
            execSync(`npx create-next-app@latest ${answer.projectName} --ts --app --src-dir --import-alias @/*`, { stdio: "inherit" });
            const projectPath = path.join(process.cwd(), answer.projectName);
            process.chdir(answer.projectName);
            const dependencies = [
                "@trpc/client",
                "@trpc/server",
                "@trpc/react-query",
                "@tanstack/react-query",
                "decimal.js",
                "superjson",
            ];
            if (answer.prisma) {
                dependencies.push("prisma", "@prisma/client", "bcrypt", "@types/bcrypt", "ts-node");
            }
            if (answer.zod) {
                dependencies.push("zod");
            }
            if (answer.reactHookForm) {
                dependencies.push("react-hook-form", "@hookform/resolvers");
            }
            if (answer.nextAuth) {
                dependencies.push("next-auth");
            }
            if (answer.zustand) {
                dependencies.push("zustand");
            }
            if (answer.prisma && answer.nextAuth) {
                dependencies.push("@auth/prisma-adapter");
            }
            yield installDependencies(projectPath, dependencies);
            if (answer.prisma) {
                execSync(`npx prisma init`, { stdio: "inherit" });
            }
            yield createDirectoryStructure(projectPath, answer);
            console.log(`${chalk.green("Success!")} Next.js project with tRPC${answer.prisma ? ", React Query, and Prisma" : " and React Query"} successfully created in ${answer.projectName}!`);
        }
        catch (error) {
            console.error("Error while creating the project:", error);
            process.exit(1);
        }
    });
}
main();
