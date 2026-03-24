"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { updateProfile } from "@/services/auth.service";
import { UserProfile } from "@/types/index";
import ResetPasswordButton from "@/components/Buttons";
import { theme, buttonStyles } from "@/styles/theme";
import { applyTheme } from "@/components/ThemeProvider";

export default function ProfileForm({ profile }: { profile: UserProfile }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  const [firstName, setFirstName] = useState(profile.first_name ?? "");
  const [lastName, setLastName] = useState(profile.last_name ?? "");
  const [themeMode, setThemeMode] = useState<"light" | "dark">(profile.theme);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Update theme immediately when themeMode changes
  useEffect(() => {
    if (mounted) {
      applyTheme(themeMode === "dark");
    }
  }, [themeMode, mounted]);

  const isDark = themeMode === "dark";
  const currentTheme = isDark ? theme.dark : theme.light;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const result = await updateProfile({
      firstName,
      lastName,
      theme: themeMode,
    });

    if (!result.success) {
      setError(result.error ?? "Something went wrong");
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);

    router.refresh();
  }

  if (!mounted) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* First name */}
      <div className="flex flex-col gap-1.5">
        <label
          className="text-sm font-medium"
          style={{ color: currentTheme.colors.text }}
        >
          First name
        </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter first name"
          className={buttonStyles.input}
          style={{
            borderColor: currentTheme.colors.inputBorder,
            backgroundColor: currentTheme.colors.inputBg,
            color: currentTheme.colors.text,
          }}
        />
      </div>

      {/* Last name */}
      <div className="flex flex-col gap-1.5">
        <label
          className="text-sm font-medium"
          style={{ color: currentTheme.colors.text }}
        >
          Last name
        </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter last name"
          className={buttonStyles.input}
          style={{
            borderColor: currentTheme.colors.inputBorder,
            backgroundColor: currentTheme.colors.inputBg,
            color: currentTheme.colors.text,
          }}
        />
      </div>

      {/* Theme toggle */}
      <div className="flex flex-col gap-1.5">
        <label
          className="text-sm font-medium"
          style={{ color: currentTheme.colors.text }}
        >
          Theme
        </label>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setThemeMode("light")}
            className="flex-1 py-2 rounded-lg text-sm font-medium border"
            style={{
              backgroundColor:
                themeMode === "light"
                  ? currentTheme.colors.primary
                  : currentTheme.colors.surface,
              color:
                themeMode === "light" ? "#ffffff" : currentTheme.colors.text,
              borderColor:
                themeMode === "light"
                  ? currentTheme.colors.primary
                  : currentTheme.colors.border,
            }}
          >
            Light
          </button>
          <button
            type="button"
            onClick={() => setThemeMode("dark")}
            className="flex-1 py-2 rounded-lg text-sm font-medium border"
            style={{
              backgroundColor:
                themeMode === "dark"
                  ? currentTheme.colors.primary
                  : currentTheme.colors.surface,
              color:
                themeMode === "dark" ? "#ffffff" : currentTheme.colors.text,
              borderColor:
                themeMode === "dark"
                  ? currentTheme.colors.primary
                  : currentTheme.colors.border,
            }}
          >
            Dark
          </button>
        </div>
      </div>

      {/* Reset password section */}
      <div
        className="pt-5 mt-2"
        style={{ borderTop: `1px solid ${currentTheme.colors.border}` }}
      >
        <p
          className="text-sm font-medium mb-1"
          style={{ color: currentTheme.colors.text }}
        >
          Password
        </p>
        <p
          className="text-xs mb-3"
          style={{ color: currentTheme.colors.textSecondary }}
        >
          Send a reset link to your email to change your password
        </p>
        <ResetPasswordButton email={profile.email} />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className={buttonStyles.primary}
        style={{
          backgroundColor: loading
            ? currentTheme.colors.primary + "99"
            : currentTheme.colors.primary,
          color: "#ffffff",
        }}
      >
        {loading ? "Saving..." : "Save changes"}
      </button>

      {/* Success message */}
      {success && (
        <div
          className="text-sm px-4 py-3 rounded-lg"
          style={{
            backgroundColor: currentTheme.colors.success + "20",
            color: currentTheme.colors.success,
          }}
        >
          Profile updated successfully
        </div>
      )}

      {/* Error message */}
      {error && (
        <div
          className="text-sm px-4 py-3 rounded-lg"
          style={{
            backgroundColor: currentTheme.colors.error + "20",
            color: currentTheme.colors.error,
          }}
        >
          {error}
        </div>
      )}
    </form>
  );
}
