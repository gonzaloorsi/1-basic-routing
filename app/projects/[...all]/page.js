"use client";

export default function All({ params }) {
  return (
    <div>
      <h2>All Projects</h2>
      <p>
        {params.all.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </p>
    </div>
  );
}
