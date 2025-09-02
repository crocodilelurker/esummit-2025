<<<<<<< Updated upstream
import Navbar from "./_components/Navbar"
import Footer from "./_components/Footer"
=======
import "../app/globals.css";
>>>>>>> Stashed changes
export const metadata = {
  title: "E-Summit 2025",
  description: "MetaData Configured",
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
