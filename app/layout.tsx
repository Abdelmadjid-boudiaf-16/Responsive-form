import type { Metadata } from "next";
import "./globals.css";

import { cn } from "@/lib/utils";

import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Logo from "@/components/logo/logo";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Jido Form",
  description: "A frontend-only authentication system featuring responsive signup and login forms, built with Next.js, ShadCN, and Tailwind CSS. Utilizes React Hook Form for form handling and Zod for validation, ensuring a smooth user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(poppins.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen items-center justify-center gap-4 p-2 w-full">
            <Logo />
            <main className="w-full flex flex-col justify-center items-center gap-4">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
