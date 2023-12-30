import { httpBatchLink } from "@trpc/client";
import { appRouter } from "@/server";

// Function to dynamically determine the API URL
function getApiUrl() {
  if (typeof window !== "undefined") {
    // Client-side: Use the current window's location
    return `${window.location.origin}/api/trpc`;
  } else {
    // Server-side: Use a relative URL for internal API calls
    return "/api/trpc";
  }
}

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: getApiUrl(),
    }),
  ],
});
