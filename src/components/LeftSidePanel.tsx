// src/components/LeftSidePanel.tsx
"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { logOut } from "@/services/auth.service";

const navItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    label: "Job Board",
    path: "/dashboard/jobs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: "Profile",
    path: "/profile",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
];

export function LeftSidePanel() {
  const router = useRouter();
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logOut();
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      setIsLoggingOut(false);
    }
  };

  return (
    <aside
      className="fixed top-0 left-0 h-screen w-56 flex flex-col py-6 z-40 border-r"
      style={{
        backgroundColor: "var(--color-bg)",
        borderColor: isDark
          ? "rgba(50, 142, 110, 0.15)"
          : "rgba(176, 235, 180, 0.3)",
      }}
    >
      {/* Logo / App name */}
      <div className="px-4 mb-8">
        <span
          className="text-lg font-semibold"
          style={{ color: "var(--color-text)" }}
        >
          MyApp
        </span>
      </div>

      {/* Nav Items */}
      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => router.push(item.path)}
              className="w-full flex items-center gap-3 px-4 py-2.5 transition-colors duration-200"
              style={{
                color: isActive
                  ? "var(--color-primary, #328e6e)"
                  : "var(--color-text)",
                backgroundColor: isActive
                  ? isDark
                    ? "rgba(50, 142, 110, 0.15)"
                    : "rgba(176, 235, 180, 0.25)"
                  : "transparent",
                borderRight: isActive
                  ? "2px solid var(--color-primary, #328e6e)"
                  : "2px solid transparent",
              }}
              onMouseEnter={(e) => {
                if (!isActive)
                  e.currentTarget.style.backgroundColor = isDark
                    ? "rgba(50, 142, 110, 0.1)"
                    : "rgba(176, 235, 180, 0.2)";
              }}
              onMouseLeave={(e) => {
                if (!isActive)
                  e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Logout — pinned to bottom */}
      <div className="mt-auto">
        <div
          style={{
            borderTop: `1px solid var(--color-border)`,
            margin: "0.5rem 0",
          }}
        />
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="w-full flex items-center gap-3 px-4 py-2.5 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{
            color: "var(--color-error)",
            backgroundColor: "transparent",
          }}
          onMouseEnter={(e) => {
            if (!isLoggingOut)
              e.currentTarget.style.backgroundColor = isDark
                ? "rgba(217, 79, 79, 0.1)"
                : "rgba(217, 79, 79, 0.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          {isLoggingOut ? (
            /* Spinner */
            <svg
              className="w-4 h-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          ) : (
            /* Logout icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
              />
            </svg>
          )}
          <span className="text-sm font-medium">
            {isLoggingOut ? "Logging out..." : "Logout"}
          </span>
        </button>
      </div>
    </aside>
  );
}
