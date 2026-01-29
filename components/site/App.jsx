"use client";
import React, { useState, useEffect } from "react";
import { Smartphone, Router, Settings2, FileText, Zap } from "lucide-react";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Hero from "./Hero";
import ServiceCard from "./ServiceCard";
import Footer from "./Footer";

// Imports des vues
import ComparisonResultsPage from "./simulation/ComparaisonResultatsPage";
import MobileSimulationProfile from "./simulation/MobileSimulationProfile";
import MobileRangeSimulator from "./simulation/MobileRangeSimulator";
import OfferDetailsPage from "./simulation/OfferDetailsPage";
import FixedInternetPage from "./simulation/FixedInternetPage";

const AppHome = () => {
  const [currentPage, setCurrentPage] = useState("accueil");
  const [previousPage, setPreviousPage] = useState("accueil");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // États de données critiques
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedOffer, setSelectedOffer] = useState(null);

  // Gestion fluide du scroll
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // --- LOGIQUE DE NAVIGATION ---

  // Déclenché par le gros bouton "Comparer" du simulateur intégré
  const handleStartComparison = (profileData) => {
    setSelectedProfile(profileData);
    setPreviousPage("accueil"); // On vient de l'accueil car le simulateur y est intégré
    setCurrentPage("resultats-comparaison");
  };

  // Déclenché par les clics sur "Voir Détails" partout dans l'app
  const handleSeeDetails = (offer) => {
    setSelectedOffer(offer);
    setPreviousPage(currentPage); // Mémorise la liste d'origine
    setCurrentPage("details-offre");
  };

  const renderPage = () => {
    switch (currentPage) {
      // 1. PAGE DES RÉSULTATS (Après simulation)
      case "resultats-comparaison":
        return (
          <ComparisonResultsPage
            profile={selectedProfile}
            onBack={() => setCurrentPage("accueil")}
            onSeeDetails={handleSeeDetails}
          />
        );

      // 2. FICHE TECHNIQUE (Vue Executive)
      case "details-offre":
        return (
          <OfferDetailsPage
            offer={selectedOffer}
            onBack={() => setCurrentPage(previousPage)}
          />
        );

      // 3. INTERNET FIXE (Fibre & Box)
      case "comparateur-fixe":
        return (
          <FixedInternetPage
            onBack={() => setCurrentPage("accueil")}
            onSeeDetails={handleSeeDetails}
          />
        );

      // 4. ACCUEIL (Avec simulateur interactif intégré)
      default:
        return (
          <>
            <Hero onNavigate={setCurrentPage} />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 -mt-12 md:-mt-24 mb-20 md:mb-32 relative z-20">
              {/* items-stretch force toutes les colonnes à avoir la même hauteur réelle */}
              <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
                {/* BLOC SIMULATEUR (Indépendant) */}
                <div className="lg:col-span-2 flex flex-col h-full">
                  <MobileSimulationProfile onStart={handleStartComparison} />
                </div>

                {/* BLOC INTERNET FIXE (Indépendant et Aligné) */}
                <div className="lg:col-span-1 flex flex-col h-full">
                  <ServiceCard
                    icon={Router}
                    title="Internet Fixe"
                    description="Analysez les débits fibre optique et box 4G/5G de Togocom, CanalBox et Moov."
                    features={[
                      "Débit garanti",
                      "Frais d'accès 0F",
                      "Installation rapide",
                    ]}
                    buttonText="Comparer le fixe"
                    variant="orange"
                    onAction={() => setCurrentPage("comparateur-fixe")}
                  />
                </div>
              </div>
            </main>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-600 overflow-x-hidden">
      <Header
        onToggleMenu={toggleMobileMenu}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onToggle={toggleMobileMenu}
        onNavigate={setCurrentPage}
        currentPage={currentPage}
      />

      {/* Conteneur de rendu avec animation d'entrée */}
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
        {renderPage()}
      </div>

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default AppHome;
