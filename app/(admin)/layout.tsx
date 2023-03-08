import "../../styles/globals.css";

export const metadata = {
  title: "Vapor's CMS",
  description: "Vapor's Content Management System!",
  icons: "https://links.zvapor.xyz/1m1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
