"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /admin/static when the component loads
    router.push("/admin/statistic");
  }, [router]);

  return null; // Optionally, render nothing or a loading spinner while redirecting
}
