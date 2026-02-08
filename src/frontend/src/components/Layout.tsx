import { ReactNode } from 'react';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-saffron/5">
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-saffron">द्वारका यात्रा गाइड</h1>
            <p className="text-xs text-muted-foreground">by The Desi Musafir</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-saffron to-ocean flex items-center justify-center text-white font-bold text-sm shadow-lg">
              🪶
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}
