import Banner from "../../components/Banner";
import Header from "../../components/Header";
import "../../styles/globals.css";

export const metadata = {
  title: "Vapor's Blog",
  description: "Vapor's Blog to keep up with!",
  icons: "https://links.zvapor.xyz/1m1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />
        {/* Banner */}
        <Banner />
        {children}
      </body>
    </html>
  );
}
