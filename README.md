# create-next-app-trpc

Create Next.js projects seamlessly with tRPC and React Query using `create-next-app-trpc`. tRPC allows for type-safe API routes without schema or generation, and React Query is a powerful tool for managing server state in React applications. This package streamlines setting up a Next.js project with these advanced technologies, simplifying the initial configuration and saving valuable development time.

## Introduction

tRPC and React Query enhance Next.js applications by providing efficient data fetching and state management capabilities. With `create-next-app-trpc`, you can kickstart your project with a pre-configured setup, focusing on building your application right away.

## Prerequisites

To use this package, you'll first need to have Node.js installed on your system. If you don't have Node.js installed, you can download it from [the official Node.js website](https://nodejs.org/).

## Installation

Once Node.js is installed, you can install the `create-next-app-trpc` package using npm (Node Package Manager). Run the following command in your terminal:

```bash
npm install -g create-next-app-trpc
```

This will install the package globally on your system, allowing you to use it to create new Next.js projects with tRPC and React Query.

Usage
After installing the package, you can create a new Next.js project by running:

```bash
npx create-next-app-trpc
```

This command will create a new Next.js project and set up the necessary configurations for tRPC and React Query.

## Prisma Support

`create-next-app-trpc` now includes optional support for Prisma, an open-source database toolkit, making your project ready for deployment with efficient and time-saving features. When you opt for Prisma, your project will be equipped with the following:

- Prisma Seed: Prisma's seeding functionality is added for easy database setup. This is reflected in your package.json file under the Prisma configuration as follows:

  ```bash
  "prisma": {
    "seed": "node prisma/seed.js"
  }
  ```

  This configuration ensures that the `prisma/seed.js` script is executed to seed your database, providing a convenient way to populate your database with initial data.

- Automatic Prisma Client Generation: In your `package.json`, the `postinstall` script is configured as `"postinstall": "prisma generate"`. This ensures that the Prisma client is automatically generated after installation, simplifying your deployment process.
- `.gitignore` File Automation: When Prisma is added, `create-next-app-trpc` automatically updates the `.gitignore` file to include `.env`, ensuring that your environment variables are not exposed in version control. This helps maintain the security and integrity of your application.

To include Prisma in your project setup, simply select 'Yes' when prompted during the creation process. This will automatically configure Prisma in your new Next.js project, saving you the time and effort of manual setup.

## Features

`create-next-app-trpc` sets up a Next.js project with the following default features:

- TypeScript Support (--ts): Strongly typed JavaScript for better developer experience.
- src/ Directory Structure (--src-dir): Organized project structure with all source files in the src/ directory.
- App Router Configuration (--app): Pre-configured router setup for immediate use.
- Import Aliases (--import-alias): Simplify imports with the default alias "@/\*" for cleaner code.

## Project Structure

```bash
map -> .
├── prisma  # <-- if prisma is added
│   ├── migrations # <-- if prisma is added
│   │   └── [...]
│   ├── schema.prisma # <-- if prisma is added
│   ├── seed.ts # <-- if prisma is added
│   └── [...]
├── src
│   ├── app
│   │   ├── _context # <-- context (optional) (if next-auth is added)
│   │   │   └── AuthProvider.tsx # <-- authentication provider (if next-auth is added)
│   │   ├── _trpc  # <-- add withTRPC()-HOC here
│   │   │   └── client.ts  # <-- tRPC client
│   │   │   └── Provider.tsx  # <-- tRPC provider
│   │   │   └── serverClient.ts  # <-- tRPC server client
│   │   ├── api
│   │   │   ├── trpc
│   │   │   │   └── [trpc]
│   │   │   │       └── route.ts  # <-- tRPC HTTP handler
│   │   │   └── auth
│   │   │       └── [...nextauth]  # <-- if next-auth is added
│   │   │           └── options.ts # <-- next-auth options if next-auth is added
│   │   │           └── route.ts  # <-- next-auth HTTP handler if next-auth is added
│   │   └── [...]
│   ├── lib # <-- utility functions
│   │   ├── prisma.ts  # <-- prisma client (if prisma is added)
│   │   ├── models.ts  # <-- zod models (if zod is added)
│   │   ├── types.ts  # <-- types (if zod is added)
│   │   └── [...]
│   ├── server # <-- server-side code
│   │   ├── routers # <-- routers
│   │   │   ├── user.ts  # <-- sub routers (optional)
│   │   │   ├── post.ts  # <-- sub routers (optional)
│   │   │   └── [...]
│   │   ├── context.ts  # <-- context (optional if next-auth is added)
│   │   ├── index.ts  # <-- main router
│   │   └── trpc.ts      # <-- procedure helpers
│   ├── middleware.ts  # <-- middleware if next-auth is added
│   └── [...]
├── .env # <-- environment variables (if prisma or next-auth is added)
├── next-auth.d.ts  # <-- next-auth config if next-auth is added
└── [...]
```

## What's Included?

The package will set up a new Next.js project with the following packages pre-installed:

- @trpc/client
- @trpc/server
- @trpc/react-query
- @tanstack/react-query
- decimal.js
- superjson

In addition to these, `create-next-app-trpc` also offers optional support for:

- Prisma: If opted, adds `prisma` and `@prisma/client` for robust database management. Additionally, if Prisma is added, it will also include `bcrypt` and `@types/bcrypt` to simplify the process of encrypting passwords for enhanced security.
- Zod: If chosen, includes `zod` for TypeScript-first schema validation.
- React-Hook-Form: If selected, integrates `react-hook-form` for efficient form handling in React applications.
- Next-Auth: If opted, adds `next-auth` for authentication and authorization in Next.js applications.

These optional integrations can be added during the setup process, enhancing your development experience with additional capabilities tailored to your project's needs.

These dependencies and optional integrations are key in providing a robust setup for working with tRPC and React Query (along with Prisma, Zod, and react-hook-form, if opted) in a Next.js project.

## Example

To demonstrate how you can use `create-next-app-trpc`, here's a basic example:

```bash
"use client";

import { trpc } from "./_trpc/client";

export default function Home() {
  const greeting = trpc.greeting.useQuery();
  return <h1>{greeting.data ?? "No data"}</h1>;
}
```

This example shows how to set up a simple tRPC router using `create-next-app-trpc`

## Documentation and Resources

For comprehensive guides and best practices, refer to the official documentation of each tool and library integrated with `create-next-app-trpc`:

- Next.js Documentation: [Next.js Official Docs](https://nextjs.org/docs/getting-started)
- tRPC Documentation: [tRPC Official Docs](https://trpc.io/)
- Superjson Documentation: [Superjson Official Docs](https://www.npmjs.com/package/superjson)
- Decimal.js Documentation: [Decimal.js Official Docs](https://mikemcl.github.io/decimal.js/)
- Prisma Documentation: [Prisma Official Docs](https://www.prisma.io/docs/)
- bycrypt Documentation: [bcrypt Official Docs](https://www.npmjs.com/package/bcrypt)
- Zod Documentation: [Zod Official Docs](https://zod.dev/)
- React-Hook-Form Documentation: [react-hook-form Official Docs](https://react-hook-form.com/)
- React Query Documentation: [React Query Official Docs](https://react-query.tanstack.com/)
- Next-Auth Documentation: [Next-Auth Official Docs](https://next-auth.js.org/)

## Contributing

Contributions to `create-next-app-trpc` are welcome. If you have any suggestions, bug reports, or pull requests, feel free to open an issue or submit a pull request on the repository.

## License

This project is licensed under the MIT License. The full license text can be found in the `LICENSE` file in the project repository.
