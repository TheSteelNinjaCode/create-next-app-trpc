import { z } from "zod";
import { UserRoleSchema, UserSchema } from "./models";

export type User = z.infer<typeof UserSchema>;
export const defaultUserValues: User = {
  id: "",
  name: null,
  email: null,
  emailVerified: null,
  image: null,
  roleId: 2,
} as const;

export type UserRole = z.infer<typeof UserRoleSchema>;
export const defaultUserRoleValues: UserRole = {
  id: 0,
  name: "",
} as const;
