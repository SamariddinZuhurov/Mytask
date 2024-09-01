import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Mytask",
  description: "Great website for doing your tasks .",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html>
        <body className="bg-[#f8f5f5]">{children}</body>
      </html>
    </ClerkProvider>
  );
}
