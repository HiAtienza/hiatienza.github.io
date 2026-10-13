import type { Metadata } from "next";
import { LegacyProject } from "@/components/legacy-project";

export const metadata: Metadata = {
  title: "LockIn",
  robots: { index: false, follow: true },
  alternates: { canonical: "/es/projects/lock-in/" }
};
export default function Page() {
  return <LegacyProject locale="es" />;
}
