import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import ChatDrawer from "@/components/ChatDrawer";
import QuickAccessBar from "@/components/QuickAccessBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "First Aid Guide | Clinical Emergency Medical Support",
  description: "Get instant, step-by-step first aid guidance. Clean clinical protocols for CPR, choking, bleeding, fractures, burns, poisoning, and allergic reactions with integrated AI assistant support.",
  keywords: "first aid, medical emergency, CPR steps, choking baby, anaphylaxis, fractures, bleeding, stroke FAST, clinical guide, emergency, MiniMax AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-base text-text-primary selection:bg-accent-teal selection:text-base">
        {/* Sitewide subtle noise overlay */}
        <div className="noise-overlay" />
        
        {/* Main page content wrapper */}
        <main className="flex-1 flex flex-col relative z-10">
          {children}
        </main>

        {/* Global Clinical Footer */}
        <Footer />

        {/* Global Floating Components */}
        <ChatDrawer />
        <QuickAccessBar />
      </body>
    </html>
  );
}

