import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

export const Contact = () => {
  return (
    <section id="kontakt" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Kontakt</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Lassen Sie uns sprechen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bereit für Ihre Traumtorte? Kontaktieren Sie uns für eine 
            persönliche Beratung oder besuchen Sie uns in unserer Bäckerei.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Bekabo Bäckerei & Konditorei
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Adresse</h4>
                    <p className="text-muted-foreground">
                      Bahnhofstrasse 123<br />
                      8001 Zürich, Schweiz
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Telefon</h4>
                    <p className="text-muted-foreground">+41 79 123 45 67</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">E-Mail</h4>
                    <p className="text-muted-foreground">info@bekabo.ch</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Instagram</h4>
                    <p className="text-muted-foreground">@bekabo.ch1</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Öffnungszeiten</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Montag - Freitag: 7:00 - 18:00</p>
                      <p>Samstag: 8:00 - 16:00</p>
                      <p>Sonntag: Geschlossen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-6">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Anfrage senden
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Vorname
                    </label>
                    <Input placeholder="Ihr Vorname" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nachname
                    </label>
                    <Input placeholder="Ihr Nachname" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    E-Mail
                  </label>
                  <Input type="email" placeholder="ihre.email@beispiel.ch" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Telefon
                  </label>
                  <Input type="tel" placeholder="+41 79 123 45 67" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Anlass
                  </label>
                  <Input placeholder="z.B. Geburtstag, Hochzeit, Firmenfeier" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Ihre Nachricht
                  </label>
                  <Textarea 
                    placeholder="Beschreiben Sie Ihre Wünsche und Vorstellungen..." 
                    rows={4}
                  />
                </div>

                <Button className="w-full" size="lg">
                  Anfrage senden
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};