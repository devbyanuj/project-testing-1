"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { logIn } from "@/services/auth.service";
import type { LoginFormData } from "@/types/auth";

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const data: LoginFormData = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const result = await logIn(data);

    if (!result.success) {
      setError(result.error || "Invalid email or password");
      setLoading(false);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h1
        className="text-2xl font-semibold transition-colors duration-200"
        style={{ color: "var(--color-text)" }}
      >
        Welcome back
      </h1>

      {error && (
        <p
          className="text-sm px-3 py-2 rounded-lg transition-all duration-200"
          style={{
            color: "var(--color-error)",
            backgroundColor: "var(--color-error)" + 15,
          }}
        >
          {error}
        </p>
      )}

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="w-full px-3 py-2 rounded-lg border transition-all duration-200"
        style={{
          borderColor: "var(--input-border)",
          backgroundColor: "var(--input-bg)",
          color: "var(--color-text)",
        }}
      />

      <div className="relative">
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          required
          className="w-full px-3 py-2 rounded-lg border pr-10 transition-all duration-200"
          style={{
            borderColor: "var(--input-border)",
            backgroundColor: "var(--input-bg)",
            color: "var(--color-text)",
          }}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-200"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 4.411m0 0L21 21"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          )}
        </button>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full px-4 py-2 rounded-lg font-medium text-white transition-all duration-200"
        style={{
          backgroundColor: loading
            ? "var(--color-primary)"
            : "var(--color-primary)",
          opacity: loading ? 0.6 : 1,
        }}
      >
        {loading ? "Logging in..." : "Log in"}
      </button>

      <p
        className="text-sm text-center transition-colors duration-200"
        style={{ color: "var(--color-text-secondary)" }}
      >
        No account?{" "}
        <a
          href="/signup"
          style={{ color: "var(--color-primary)" }}
          className="font-semibold hover:underline"
        >
          Sign up
        </a>
      </p>
    </form>
  );
}
