"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { resetPassword } from "@/services/auth.service";

export function SignupButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/signup")}
      className="px-4 py-2 rounded-lg font-medium text-white transition-all duration-200"
      style={{
        backgroundColor: "var(--color-primary)",
      }}
    >
      Create account
    </button>
  );
}

export function LoginButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/login")}
      className="px-4 py-2 rounded-lg font-medium transition-all duration-200 border"
      style={{
        backgroundColor: "var(--color-surface)",
        color: "var(--color-text)",
        borderColor: "var(--color-border)",
      }}
    >
      Log in
    </button>
  );
}

export function DashboardButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/dashboard")}
      className="px-4 py-2 rounded-lg font-medium text-white transition-all duration-200"
      style={{
        backgroundColor: "var(--color-primary)",
      }}
    >
      Go to Dashboard
    </button>
  );
}

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    const { createClient } = await import("@/supabase/supabaseClient");
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 rounded-lg font-medium text-white transition-all duration-200"
      style={{
        backgroundColor: "var(--color-error)",
      }}
    >
      Log out
    </button>
  );
}

export default function ResetPasswordButton({ email }: { email: string }) {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleReset() {
    setLoading(true);
    setError("");

    const result = await resetPassword(email);

    if (!result.success) {
      setError(result.error ?? "Something went wrong");
      setLoading(false);
      return;
    }

    setSent(true);
    setLoading(false);
  }

  if (sent) {
    return (
      <p
        className="text-sm px-4 py-2 rounded-lg transition-all duration-200"
        style={{
          color: "var(--color-success)",
          backgroundColor: "rgba(16, 185, 129, 0.1)",
        }}
      >
        Reset link sent to {email}
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {error && (
        <p
          className="text-xs transition-colors duration-200"
          style={{ color: "var(--color-error)" }}
        >
          {error}
        </p>
      )}
      <button
        type="button"
        onClick={handleReset}
        disabled={loading}
        className="w-full py-2 rounded-lg text-sm font-medium transition-all duration-200 border"
        style={{
          color: "var(--color-text)",
          borderColor: "var(--color-border)",
          backgroundColor: "var(--color-surface)",
          opacity: loading ? 0.5 : 1,
        }}
      >
        {loading ? "Sending..." : "Send reset link"}
      </button>
    </div>
  );
}
