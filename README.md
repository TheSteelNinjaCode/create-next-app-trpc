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

`create-next-app-trpc` now includes optional support for Prisma, an open-source database toolkit. This feature allows you to seamlessly integrate Prisma into your Next.js project, providing a robust solution for handling database operations with ease.

To include Prisma in your project setup, simply select 'Yes' when prompted during the creation process. This will automatically configure Prisma in your new Next.js project, saving you the time and effort of manual setup.

## Features

`create-next-app-trpc` sets up a Next.js project with the following default features:

- TypeScript Support (--ts): Strongly typed JavaScript for better developer experience.
- src/ Directory Structure (--src-dir): Organized project structure with all source files in the src/ directory.
- App Router Configuration (--app): Pre-configured router setup for immediate use.
- Import Aliases (--import-alias): Simplify imports with the default alias "@/\*" for cleaner code.

# Project Structure

```bash
map -> .
├── prisma  # <-- if prisma is added
│   └── [...]
├── src
│   ├── app
│   │   ├── _trpc  # <-- add withTRPC()-HOC here
│   │   │   └── client.ts  # <-- tRPC client
│   │   │   └── Provider.tsx  # <-- tRPC provider
│   │   │   └── serverClient.ts  # <-- tRPC server client
│   │   ├── api
│   │   │   └── trpc
│   │   │       └── [trpc]
│   │   │           └── route.ts  # <-- tRPC HTTP handler
│   │   └── [...]
│   ├── server
│   │   ├── routers
│   │   │   ├── user.ts  # <-- sub routers (optional)
│   │   │   ├── post.ts  # <-- sub routers (optional)
│   │   │   └── [...]
│   │   ├── index.ts  # <-- main router
│   │   └── trpc.ts      # <-- procedure helpers
│   └── [...]
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

And if Prisma support is added:

- prisma
- @prisma/client

These dependencies are essential for working with tRPC and React Query (and Prisma, if opted) in a Next.js project.

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

## Contributing

Contributions to `create-next-app-trpc` are welcome. If you have any suggestions, bug reports, or pull requests, feel free to open an issue or submit a pull request on the repository.

## License

This project is licensed under the ISC License. The full license text can be found in the `LICENSE` file in the project repository. This permissive license allows for the use, modification, distribution, and private use of the software with minimal restrictions.
