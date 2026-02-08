import { SiInstagram } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="fixed bottom-16 left-0 right-0 z-30 border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-12 items-center justify-center px-4">
        <a
          href="https://www.instagram.com/the_desi.musafir"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-saffron transition-colors"
        >
          <span>Planned by</span>
          <SiInstagram className="h-4 w-4" />
          <span className="font-medium">@the_desi.musafir</span>
        </a>
      </div>
    </footer>
  );
}
