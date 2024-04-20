import type { Metadata } from "next";

import PageLayout from "@/layouts/pageLayout";

export const metadata: Metadata = {
  title: "The Gardens of Paradise - Poems from Al-Andalus",
  description: "The Gardens of Paradise - Poems from Al-Andalus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout root={true}>{children}</PageLayout>;
}
