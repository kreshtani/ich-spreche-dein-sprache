import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import bekaboLogo from "@/assets/bekabo-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-warm-brown text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={bekaboLogo} 
                alt="Bekabo Logo" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <h3 className="text-2xl font-bold">Bekabo</h3>
            </div>
            <p className="text-white/80">
              Ihre Schweizer Bäckerei für traumhafte Geburtstagstorten 
              und süße Kreationen in Zürich.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/bekabo.ch1" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Produkte</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Geburtstagstorten</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hochzeitstorten</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cupcakes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Designs</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Lieferservice</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Event Catering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Beratung</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Express Service</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Kontakt</h4>
            <div className="space-y-2 text-white/80">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+41 79 123 45 67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@bekabo.ch</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Bahnhofstrasse 123, 8001 Zürich</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Bekabo Bäckerei & Konditorei. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};