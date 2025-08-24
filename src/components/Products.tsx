import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import cakeCollection from "@/assets/cake-collection.jpg";
import weddingCake from "@/assets/wedding-cake.jpg";

const products = [
  {
    title: "Geburtstagstorten",
    description: "Individuelle Torten für jeden Geschmack - von klassisch bis ausgefallen",
    price: "ab CHF 45",
    image: cakeCollection,
    features: ["Personalisierbar", "Frische Zutaten", "48h Vorlaufzeit"]
  },
  {
    title: "Hochzeitstorten",
    description: "Mehrstöckige Traumtorten für Ihren besonderen Tag",
    price: "ab CHF 150", 
    image: weddingCake,
    features: ["Mehrstöckig", "Elegant", "Beratung inklusive"]
  },
  {
    title: "Cupcakes & Muffins",
    description: "Perfekt für Büro-Events und kleine Feiern",
    price: "ab CHF 4.50/Stück",
    image: cakeCollection,
    features: ["12er Sets", "Verschiedene Sorten", "Schnelle Lieferung"]
  }
];

export const Products = () => {
  return (
    <section id="produkte" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Unsere Spezialitäten</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Süße Kreationen für jeden Anlass
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie unsere handgefertigten Torten und Gebäck - 
            jedes Stück ein kleines Kunstwerk aus frischen, regionalen Zutaten.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {product.price}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-foreground">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button className="w-full" variant="outline">
                  Jetzt bestellen
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            Alle Produkte ansehen
          </Button>
        </div>
      </div>
    </section>
  );
};