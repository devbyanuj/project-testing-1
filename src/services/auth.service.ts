// src/services/auth.service.ts
import { createClient } from "@/supabase/supabaseClient";
import type {
  SignupFormData,
  LoginFormData,
  AuthResult,
  UpdateProfileData,
} from "@/types/index";

export async function signUp(data: SignupFormData): Promise<AuthResult> {
  const supabase = createClient();

  // Step 1 — create the auth user with email and password
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        // these get passed to your public.users table via a trigger
        first_name: data.firstName,
        last_name: data.lastName,
      },
    },
  });

  if (authError) {
    return { success: false, error: authError.message };
  }

  return {
    success: true,
    user: {
      id: authData.user?.id ?? "",
      email: authData.user?.email ?? "",
    },
  };
}

export async function logIn(data: LoginFormData): Promise<AuthResult> {
  const supabase = createClient();

  // Step 2 — log in the user with email and password
  const { error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function logOut(): Promise<void> {
  const supabase = createClient();

  // Step 3 — log out the user
  await supabase.auth.signOut();
}

export async function getSession() {
  const supabase = createClient();

  // Step 4 — get the current session
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session;
}

export async function updateProfile(
  data: UpdateProfileData,
): Promise<AuthResult> {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return { success: false, error: "Not logged in" };
  }

  const { error } = await supabase
    .from("users")
    .update({
      first_name: data.firstName,
      last_name: data.lastName,
      theme: data.theme,
      updated_at: new Date().toISOString(),
    })
    .eq("id", session.user.id);

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function resetPassword(email: string): Promise<AuthResult> {
  const supabase = createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}
