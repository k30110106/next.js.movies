import { Metadata } from "next";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | page",
    default: "Loading...",
  },
  description: "This is Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
