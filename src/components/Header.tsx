import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import bekaboLogo from "@/assets/bekabo-logo.png";

export const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={bekaboLogo} 
              alt="Bekabo Logo" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold text-primary">Bekabo</h1>
              <span className="text-sm text-muted-foreground">Bäckerei & Konditorei</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#startseite" className="text-foreground hover:text-primary transition-colors">
              Startseite
            </a>
            <a href="#produkte" className="text-foreground hover:text-primary transition-colors">
              Produkte
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#kontakt" className="text-foreground hover:text-primary transition-colors">
              Kontakt
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>+41 79 123 45 67</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>Mo-Sa 7:00-18:00</span>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Bestellung aufgeben
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};