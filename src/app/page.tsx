/** biome-ignore-all lint/performance/noImgElement: img tags */
/** biome-ignore-all lint/a11y/useAltText: temp disabled */
"use client";

import type { IconType } from "react-icons";
import {
  FaBars,
  FaBus,
  FaCalendarAlt,
  FaClock,
  FaDollarSign,
  FaHome,
  FaImages,
  FaMapMarkerAlt,
  FaPhone,
  FaRoute,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail, MdPhone } from "react-icons/md";
import { assets } from "@/services/assets";
import { cn } from "@/services/classname";
import { formatPhoneToWhatsApp } from "@/services/phone";
import { address, busLines, contacts, financial } from "./data";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/30 via-white to-emerald-50/50">
      <Header />
      <Hero />
      <Features />
      <Gallery />
      <BusSection />
      <Footer />
    </div>
  );
}

const ImagePlaceholder = ({ className }: { className?: string }) => (
  <div className={cn(`w-full h-full bg-gray-300 animate-pulse`, className)} />
);

const Header = () => {
  return (
    <header className="bg-primary text-white py-2 sticky top-0 z-50 shadow-2xl backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <FaHome className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              Paraíso das Esmeraldas
            </h1>
            <p className="text-sm text-emerald-100 font-medium">
              Condomínio Rural
            </p>
          </div>
        </div>

        {/* Menu de Navegação */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#inicio"
            className="flex items-center gap-2 text-emerald-100 hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            <FaHome className="w-4 h-4" />
            Início
          </a>
          <a
            href="#galeria"
            className="flex items-center gap-2 text-emerald-100 hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            <FaImages className="w-4 h-4" />
            Galeria
          </a>
          <a
            href="#horarios-onibus"
            className="flex items-center gap-2 text-emerald-100 hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            <FaBus className="w-4 h-4" />
            Horários de Ônibus
          </a>
          <a
            href="#contatos"
            className="flex items-center gap-2 text-emerald-100 hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            <FaPhone className="w-4 h-4" />
            Contatos e Taxas
          </a>
        </nav>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-white p-2 rounded-md transition-colors"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu?.classList.toggle("hidden");
            }}
          >
            <FaBars className="w-6 h-6" />
          </button>
        </div>

        {/* Contato rápido - Desktop */}
        <div className="hidden lg:block text-right">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 space-y-1">
            <a
              href={formatPhoneToWhatsApp(contacts.phone)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-end gap-2 text-sm font-medium hover:text-secondary transition-colors duration-200"
            >
              <MdPhone className="w-4 h-4" />
              <span>{contacts.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      <div
        id="mobile-menu"
        className="hidden md:hidden bg-primary border-t border-secondary"
      >
        <nav className="container mx-auto px-4 py-3 space-y-2">
          <a
            href="#inicio"
            className="flex items-center gap-2 text-emerald-100 hover:text-white transition-colors duration-200 text-sm font-medium py-2"
          >
            <FaHome className="w-4 h-4" />
            Início
          </a>
          <a
            href="#galeria"
            className="flex items-center gap-2 text-emerald-100 hover:text-white transition-colors duration-200 text-sm font-medium py-2"
          >
            <FaImages className="w-4 h-4" />
            Galeria
          </a>
          <a
            href="#horarios-onibus"
            className="flex items-center gap-2 text-emerald-100 hover:text-white transition-colors duration-200 text-sm font-medium py-2"
          >
            <FaBus className="w-4 h-4" />
            Horários de Ônibus
          </a>
          <a
            href="#contatos"
            className="flex items-center gap-2 text-emerald-100 hover:text-white transition-colors duration-200 text-sm font-medium py-2"
          >
            <FaPhone className="w-4 h-4" />
            Contatos e Taxas
          </a>
          <div className="border-t border-emerald-500 pt-2 mt-3">
            <a
              href={formatPhoneToWhatsApp(contacts.phone)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-emerald-100 hover:text-white transition-colors duration-200"
            >
              <MdPhone className="w-4 h-4" />
              <span>{contacts.phone}</span>
            </a>
            <div className="flex items-center gap-2 text-xs text-emerald-200 mt-1">
              <MdEmail className="w-3 h-3" />
              <span>{contacts.email}</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-16 scroll-mt-20 relative">
        <div className="flex flex-col lg:flex-row gap-12 justify-between items-center">
          <div className="text-center lg:text-left lg:w-1/2 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <FaHome className="w-4 h-4" />
                <span>Condomínio Rural</span>
              </div>
              <h1 className="font-bold text-4xl md:text-6xl leading-tight">
                <span className="text-gray-800">Paraíso das</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
                  Esmeraldas
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-md">
              O condomínio ideal para quem busca tranquilidade, segurança e
              qualidade de vida em meio à natureza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#galeria"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <FaImages className="w-4 h-4" />
                Ver Galeria
              </a>
              <a
                href={formatPhoneToWhatsApp(contacts.phone)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                <FaPhone className="w-4 h-4" />
                Entre em Contato
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 w-full max-w-[600px]">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
              <img
                {...assets.entrada}
                className="relative w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Portaria
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: FaHome,
      title: "Conforte e Tranquilidade",
      description: "Local tranquilo e seguro com uma bela paisagem",
      color: "from-primary to-primary/80",
    },
    {
      icon: HiLocationMarker,
      title: "Localização Privilegiada",
      description: "Próximo a Esmeraldas com fácil acesso à BR-040",
      color: "from-secondary to-secondary/80",
    },
    {
      icon: FaBus,
      title: "Transporte Público",
      description: "Linhas de ônibus com horários programados",
      color: "from-tertiary to-tertiary/80",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Por que escolher o Paraíso das Esmeraldas?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra as vantagens de morar em um dos condomínios mais bem
            localizados da região
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
              ></div>
              <div
                className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section
      id="galeria"
      className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30 scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Galeria de Imagens
          </h2>
          <p className="text-xl text-gray-600">
            Conheça mais sobre nosso condomínio através dessas imagens
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {assets.gallery.map((image) => (
            <div
              key={image.src}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img
                {...image}
                className="max-w-[380px] w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <h3 className="font-bold text-lg mb-1">Vista Aérea</h3>
                <p className="text-sm text-gray-200">
                  Condomínio Paraíso das Esmeraldas
                </p>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <FaImages className="w-4 h-4 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BusSection = () => {
  return (
    <section id="horarios-onibus" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaBus className="w-4 h-4" />
            <span>Transporte Público</span>
          </div>
          <h2 className="font-bold text-3xl md:text-4xl mb-4 text-gray-800">
            Horários de Ônibus
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Confira os horários de ônibus disponíveis para facilitar seu
            deslocamento diário
          </p>
        </div>

        <div className="space-y-8">
          {busLines.map((line) => (
            <div
              key={line.label}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-1"
            >
              {/* Header do Card */}
              <div className="px-6 py-4 text-white font-bold text-xl flex items-center justify-between bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">{line.label}</span>
                <div className="relative z-10 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <FaBus className="w-5 h-5" />
                </div>
              </div>

              {/* Conteúdo do Card - Layout Flex */}
              <div className="flex flex-col lg:flex-row">
                {/* Mapa do Trajeto */}
                <div className="lg:w-2/5 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FaRoute className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="font-bold text-gray-800">
                      Trajeto da {line.label}
                    </h4>
                  </div>
                  <div className="aspect-[4/3] w-full relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl"></div>
                    <ImagePlaceholder className="w-full h-full rounded-xl border-2 border-gray-100" />
                  </div>
                  <p className="text-sm text-gray-600 mt-3 text-center font-medium">
                    Mapa do trajeto e pontos de parada
                  </p>
                </div>

                {/* Horários Compactos */}
                <div className="lg:w-3/5 p-6 bg-gradient-to-br from-gray-50/50 to-white">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Object.entries(line.values).map(([day, times]) => (
                      <div key={day} className="space-y-3">
                        <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-primary/20">
                          <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center">
                            <FaCalendarAlt className="w-3 h-3 text-primary" />
                          </div>
                          <h4 className="font-bold text-gray-800 text-sm">
                            {day}
                          </h4>
                        </div>
                        <div className="space-y-2">
                          {times.map(({ time, arrival }) => (
                            <div
                              key={time}
                              className="flex items-center justify-between text-sm p-3 bg-white rounded-lg hover:bg-primary/5 transition-all duration-300 hover:shadow-md border border-gray-100"
                            >
                              <div className="flex items-center space-x-2">
                                <div className="w-6 h-6 bg-tertiary/10 rounded-full flex items-center justify-center">
                                  <FaClock className="w-3 h-3 text-tertiary" />
                                </div>
                                <span className="font-bold text-gray-800">
                                  {time}
                                </span>
                              </div>
                              <div className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                                <FaMapMarkerAlt className="w-2 h-2" />
                                <span>{arrival}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer compacto */}
              <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                  <p className="text-sm text-gray-600 font-medium">
                    Horários sujeitos a alterações
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const FooterSectionTitle = ({
    title,
    Icon,
  }: {
    title: string;
    Icon: IconType;
  }) => (
    <div className="flex items-center gap-2 mb-4">
      <Icon className="w-5 h-5" />
      <h4 className="text-xl font-semibold">{title}</h4>
    </div>
  );

  return (
    <footer
      id="contatos"
      className="bg-tertiary text-white py-12 mt-16 scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        {/* Header do Footer */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Condomínio Paraíso das Esmeraldas
          </h3>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Conteúdo Principal do Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Coluna 1: Localização e Endereço */}
          <div className="space-y-6">
            <div>
              <FooterSectionTitle title="Localização" Icon={HiLocationMarker} />
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div>
                    <p className="font-medium mb-1">Endereço:</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {address.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="w-full">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="Localização do Condomínio Paraíso das Esmeraldas"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.2622557526297!2d-44.4512147!3d-19.7014557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa71cee9fd5777d%3A0xc5a2060dd10f9133!2sPara%C3%ADso%20das%20Esmeradas%20-%20Condom%C3%ADnio%20Rural!5e0!3m2!1spt-BR!2sbr!4v1759712691434!5m2!1spt-BR!2sbr"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Coluna 2: Contatos */}
          <div className="space-y-6">
            <div>
              <FooterSectionTitle title="Contatos" Icon={FaPhone} />
              <div className="space-y-4">
                <div className="group">
                  <p className="font-medium">Email Principal:</p>
                  <a
                    href={`mailto:${contacts.email}`}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm break-all"
                  >
                    {contacts.email}
                  </a>
                </div>

                <div className="group">
                  <p className="font-medium mb-1">
                    Email para Segunda via Boleto:
                  </p>
                  <a
                    href={`mailto:${contacts.complementaryContacts.value}`}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm break-all"
                  >
                    {contacts.complementaryContacts.value}
                  </a>
                </div>

                <div className="group">
                  <p className="font-medium">Telefone:</p>
                  <a
                    href={formatPhoneToWhatsApp(contacts.phone)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {contacts.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 3: Informações Financeiras */}
          <div className="space-y-6">
            <div>
              <FooterSectionTitle
                title="Informações Financeiras"
                Icon={FaDollarSign}
              />

              {/* Segunda via de boletos */}
              <div className="mb-6">
                <p className="font-medium mb-2">Segunda via de boletos:</p>
                <a
                  href={`mailto:${contacts.complementaryContacts.value}`}
                  className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm break-all"
                >
                  {contacts.complementaryContacts.value}
                </a>
                <p className="text-xs text-gray-100 mt-1 italic">
                  {contacts.complementaryContacts.description}
                </p>
              </div>

              {/* Taxas */}
              <div>
                <h5 className="font-medium mb-3">Taxas:</h5>
                <div className="space-y-3">
                  {financial.taxes.map((tax) => (
                    <div
                      key={tax.description}
                      className="bg-gray-700/50 p-3 rounded-lg"
                    >
                      <p className="text-sm">
                        <span className="font-semibold">{tax.value}</span>
                        <span className="text-gray-300">
                          {" "}
                          - {tax.description}
                        </span>
                      </p>
                      {tax.complementary && (
                        <p className="text-xs text-gray-400 mt-2 italic leading-relaxed">
                          {tax.complementary}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary pt-8 text-center">
          <p className="text-sm">
            © 2025 Condomínio Paraíso das Esmeraldas. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
