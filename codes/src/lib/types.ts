import { z } from "zod";
import { UserSchema } from "./models";

export type User = z.infer<typeof UserSchema>;
export const defaultUser: User = {
  id: "",
  name: null,
  email: null,
  emailVerified: null,
  image: null,
} as const;
