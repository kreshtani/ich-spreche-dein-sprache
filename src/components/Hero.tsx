import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-cake.jpg";

export const Hero = () => {
  return (
    <section id="startseite" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                Schweizer Tradition seit 2020
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Traumhafte
                <span className="text-primary block">Geburtstagstorten</span>
                nach Ihren Wünschen
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Von klassischen Schokoladentorten bis zu kreativen Custom-Designs – 
                wir verwirklichen Ihre süßesten Träume mit frischen, hochwertigen Zutaten.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                Torte bestellen
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Unsere Kreationen
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Glückliche Kunden</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">48h</div>
                <div className="text-sm text-muted-foreground">Bestellzeit</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Frische Zutaten</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Wunderschöne Geburtstagstorte von Bekabo" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">4.9⭐</div>
                <div className="text-sm opacity-90">Google Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-golden/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-rose-pink/20 rounded-full blur-2xl"></div>
    </section>
  );
};