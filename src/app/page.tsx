"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  return (
    <div className="flex flex-wrap gap-5">
      <p>Welcome To Sakura Dev channel!</p>
    </div>
  );
}
