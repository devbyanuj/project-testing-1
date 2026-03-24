// =============================================
// USER TYPES
// =============================================
export type AppRole = "client" | "process_server" | "both";
export type UserRole = "user" | "admin" | "dev";
export type Theme = "light" | "dark";

export type UserProfile = {
  id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  full_name: string | null;
  theme: Theme;
  role: UserRole;
  app_role: AppRole;
  is_active: boolean;
  created_at: string;
};

export type UpdateProfileData = {
  firstName: string;
  lastName: string;
  theme: Theme;
};
