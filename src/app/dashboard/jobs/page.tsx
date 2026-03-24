// src/app/dashboard/jobs/page.tsx
export default function JobsPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1
          className="text-2xl font-semibold"
          style={{ color: "var(--color-text)" }}
        >
          Job Board
        </h1>
      </div>
      <p style={{ color: "var(--color-text-secondary)" }}>
        Jobs will appear here.
      </p>
    </>
  );
}
