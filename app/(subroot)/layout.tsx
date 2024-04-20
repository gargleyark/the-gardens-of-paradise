import type { Metadata } from "next";

import PageLayout from "@/layouts/pageLayout";

export const metadata: Metadata = {
  title: "Gardens of Paradise - Poems from Al-Andalus",
  description: "Gardens of Paradise - Poems from Al-Andalus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout root={false}>{children}</PageLayout>;
}
