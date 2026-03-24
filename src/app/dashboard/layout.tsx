// src/app/dashboard/layout.tsx
import { createClient } from "@/supabase/supabaseServer";
import { redirect } from "next/navigation";
import { LeftSidePanel } from "@/components/LeftSidePanel";
import ThemeProvider from "@/components/ThemeProvider";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("users")
    .select("theme, role, app_role")
    .eq("id", session.user.id)
    .single();

  return (
    <>
      <ThemeProvider userTheme={profile?.theme || "light"} />
      <LeftSidePanel
      //appRole={profile?.app_role || "client"}
      //isAdmin={profile?.role === "admin"}
      />
      <main
        className="ml-56 min-h-screen p-8"
        style={{
          backgroundColor: "var(--color-bg)",
          color: "var(--color-text)",
        }}
      >
        {children}
      </main>
    </>
  );
}
