// src/app/page.tsx
import { createClient } from "@/supabase/supabaseServer";
import {
  SignupButton,
  LoginButton,
  DashboardButton,
} from "@/components/Buttons";
import ThemeProvider from "@/components/ThemeProvider";

export default async function HomePage() {
  const supabase = await createClient();

  const { count, error } = await supabase
    .from("users")
    .select("*", { count: "exact", head: true });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Get user theme if logged in
  let userTheme: "light" | "dark" = "light";
  if (session) {
    const { data: profile } = await supabase
      .from("users")
      .select("theme")
      .eq("id", session.user.id)
      .single();
    userTheme = profile?.theme || "light";
  }

  return (
    <>
      <ThemeProvider userTheme={userTheme} />
      <main
        className="min-h-screen flex flex-col items-center justify-center px-4"
        style={{
          backgroundColor: "var(--color-bg)",
          color: "var(--color-text)",
        }}
      >
        <div className="mb-12 text-center">
          <h1
            className="text-5xl font-bold tracking-tight"
            style={{ color: "var(--color-text)" }}
          >
            Project <span style={{ color: "var(--color-primary)" }}>1</span>
          </h1>
          <p
            className="mt-3 text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Your full stack Next.js application
          </p>
        </div>

        <div
          className="rounded-2xl shadow-sm border px-16 py-10 text-center"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <p
            className="text-sm font-medium uppercase tracking-widest mb-2"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Total Users
          </p>
          {error ? (
            <p className="text-red-400 text-sm">Failed to load count</p>
          ) : (
            <p
              className="text-7xl font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              {count ?? 0}
            </p>
          )}
          <p
            className="text-sm mt-3"
            style={{ color: "var(--color-text-secondary)" }}
          >
            registered accounts
          </p>
        </div>

        <div className="flex gap-4 mt-10">
          {session ? (
            <DashboardButton />
          ) : (
            <>
              <SignupButton />
              <LoginButton />
            </>
          )}
        </div>

        <p
          className="text-sm mt-16"
          style={{ color: "var(--color-text-light)" }}
        >
          Built with Next.js + Supabase
        </p>
      </main>
    </>
  );
}
