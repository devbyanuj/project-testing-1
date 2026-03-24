// src/app/dashboard/page.tsx
import { createClient } from "@/supabase/supabaseServer";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1
          className="text-2xl font-semibold"
          style={{ color: "var(--color-text)" }}
        >
          Dashboard
        </h1>
      </div>
      <p style={{ color: "var(--color-text-secondary)" }}>
        Logged in as: {session?.user.email}
      </p>
    </>
  );
}
