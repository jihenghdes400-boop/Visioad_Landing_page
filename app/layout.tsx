import Header from "@/section/Header";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-black text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}