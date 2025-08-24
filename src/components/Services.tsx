import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cake, Truck, Users, Clock, Heart, Star, Phone } from "lucide-react";

const services = [
  {
    icon: Cake,
    title: "Custom Design",
    description: "Individuelle Torten nach Ihren Vorstellungen und Wünschen"
  },
  {
    icon: Truck,
    title: "Lieferservice",
    description: "Kostenlose Lieferung in Zürich und Umgebung ab CHF 100"
  },
  {
    icon: Users,
    title: "Event Catering",
    description: "Süße Leckereien für Hochzeiten, Geburtstage und Firmenevents"
  },
  {
    icon: Clock,
    title: "Express Service",
    description: "Kurzfristige Bestellungen mit 24h Vorlaufzeit möglich"
  },
  {
    icon: Heart,
    title: "Allergikerfreundlich",
    description: "Glutenfreie, vegane und laktosefreie Alternativen verfügbar"
  },
  {
    icon: Star,
    title: "Qualitätsgarantie",
    description: "100% Zufriedenheitsgarantie oder Geld zurück"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Unsere Services</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Mehr als nur Backen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wir bieten Ihnen einen Rundum-Service für alle süßen Momente Ihres Lebens. 
            Von der Beratung bis zur Lieferung - alles aus einer Hand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow group">
                <CardContent className="pt-6">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-warm rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Haben Sie spezielle Wünsche?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Kontaktieren Sie uns für eine persönliche Beratung. 
            Gemeinsam verwirklichen wir Ihre süßen Träume!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+41791234567" className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              Jetzt anrufen
            </a>
            <a href="mailto:info@bekabo.ch" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              E-Mail schreiben
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};