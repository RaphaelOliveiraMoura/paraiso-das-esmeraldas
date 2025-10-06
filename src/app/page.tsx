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
import { address, contacts, financial } from "./data";

export default function Home() {
  return (
    <div className="grid gap-4">
      <Header />
      <Hero />
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
    <header className="bg-primary text-white py-2 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div>
          <h1 className="text-2xl font-bold">Paraíso das Esmeraldas</h1>
          <p className="text-sm text-emerald-100">Condomínio</p>
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
          <div className="flex items-center justify-end gap-1 text-sm">
            <MdPhone className="w-4 h-4" />
            <span>{contacts.phone}</span>
          </div>
          <div className="flex items-center justify-end gap-1 text-xs text-emerald-100">
            <MdEmail className="w-3 h-3" />
            <span>{contacts.email}</span>
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
            <div className="flex items-center gap-2 text-sm text-emerald-100">
              <MdPhone className="w-4 h-4" />
              <span>{contacts.phone}</span>
            </div>
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
    <section id="inicio" className="container mx-auto px-4 py-8 scroll-mt-20">
      <div className="flex flex-col lg:flex-row gap-8 justify-between items-center">
        <div className="text-center lg:text-left">
          <div>
            <span className="font-bold text-xl md:text-2xl">Condomínio</span>
            <h1 className="font-bold text-3xl md:text-4xl">
              Paraíso das Esmeraldas
            </h1>
          </div>
          <p className="mt-4 text-gray-600">
            O condomínio ideal para quem busca tranquilidade
          </p>
        </div>
        <div className="w-full max-w-[700px] h-[350px]">
          <img {...assets.entrada} className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="galeria" className="container mx-auto px-4 py-8 scroll-mt-20">
      <div className="grid grid-cols-1 min-h-60 h-full md:grid-cols-2 lg:grid-cols-3 gap-6">
        <img {...assets.visaoAerea[0]} className="w-full h-full object-cover" />
        <img {...assets.visaoAerea[1]} className="w-full h-full object-cover" />
        <img {...assets.visaoAerea[2]} className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

const BusSection = () => {
  return (
    <section
      id="horarios-onibus"
      className="container mx-auto px-4 py-8 scroll-mt-20"
    >
      <div className="text-center mb-12">
        <h2 className="font-semibold text-2xl md:text-3xl mb-4">
          Horários de Ônibus
        </h2>
        <p className="text-gray-600">
          Confira os horários de ônibus disponíveis para o seu trajeto:
        </p>
      </div>

      <div className="space-y-8">
        {[
          {
            label: "Linha 6981",
            values: {
              "Segunda a Sexta": [
                { time: "05:30", arrival: "07:40" },
                { time: "06:30", arrival: "07:40" },
                { time: "07:30", arrival: "07:40" },
              ],
              Sábado: [
                { time: "05:30", arrival: "07:40" },
                { time: "06:30", arrival: "07:40" },
                { time: "07:30", arrival: "07:40" },
              ],
              Domingo: [
                { time: "05:30", arrival: "07:40" },
                { time: "06:30", arrival: "07:40" },
                { time: "07:30", arrival: "07:40" },
              ],
            },
          },
          {
            label: "Linha 7777",
            values: {
              "Segunda a Sexta": [
                { time: "05:30", arrival: "07:40" },
                { time: "06:30", arrival: "07:40" },
                { time: "07:30", arrival: "07:40" },
              ],
              Sábado: [
                { time: "05:30", arrival: "07:40" },
                { time: "06:30", arrival: "07:40" },
                { time: "07:30", arrival: "07:40" },
              ],
              Domingo: [
                { time: "05:30", arrival: "07:40" },
                { time: "06:30", arrival: "07:40" },
                { time: "07:30", arrival: "07:40" },
              ],
            },
          },
        ].map((line) => (
          <div
            key={line.label}
            className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
          >
            {/* Header do Card */}
            <div
              className={cn(
                "px-4 py-3 text-white font-bold text-lg flex items-center justify-between bg-primary"
              )}
            >
              <span>{line.label}</span>
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <FaBus className="w-4 h-4" />
              </div>
            </div>

            {/* Conteúdo do Card - Layout Flex */}
            <div className="flex flex-col lg:flex-row">
              {/* Mapa do Trajeto */}
              <div className="lg:w-2/5 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <FaRoute className="w-4 h-4 text-gray-600" />
                  <h4 className="font-semibold text-gray-700">
                    Trajeto da {line.label}
                  </h4>
                </div>
                <div className="aspect-[4/3] w-full">
                  <ImagePlaceholder className="w-full h-full rounded-lg" />
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Mapa do trajeto e pontos de parada
                </p>
              </div>

              {/* Horários Compactos */}
              <div className="lg:w-3/5 p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(line.values).map(([day, times]) => (
                    <div key={day} className="space-y-2">
                      <div className="flex items-center gap-1 mb-2">
                        <FaCalendarAlt className="w-3 h-3 text-gray-500" />
                        <h4
                          className={cn("font-semibold text-sm pb-1 border-b")}
                        >
                          {day}
                        </h4>
                      </div>
                      <div className="space-y-1">
                        {times.map(({ time, arrival }) => (
                          <div
                            key={time}
                            className="flex items-center justify-between text-sm p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                          >
                            <div className="flex items-center space-x-2">
                              <FaClock
                                className={cn("w-3 h-3 text-tertiary")}
                              />
                              <span className="font-medium">{time}</span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-600">
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
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center">
                * Horários sujeitos a alterações
              </p>
            </div>
          </div>
        ))}
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
                    href={`tel:${contacts.phone}`}
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
