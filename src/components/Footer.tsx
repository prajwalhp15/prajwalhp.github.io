import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border/50 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
          <span>Portfolio designed & developed by</span>
          <span className="font-display font-semibold gradient-text">Prajwal H P</span>
          <Heart className="w-4 h-4 text-primary animate-pulse inline" />
        </p>
        <p className="text-sm text-muted-foreground/70 mt-2">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
