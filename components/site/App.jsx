"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Smartphone,
  ShieldCheck,
  LayoutDashboard,
  Router,
  Layers,
  Sliders,
} from "lucide-react";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Hero from "./Hero";
import ServiceCard from "./ServiceCard";
import ProtectionSection from "./ProtectionSection";
import AIModal from "./AIModal";
import Footer from "./Footer";
import ComparisonResultsPage from "./simulation/ComparaisonResultatsPage";
import GuidePage from "./pages/GuidePage";
import ActualitesPage from "./pages/ActualitesPage";
import ModernSeparator from "./ModernSeparator";
import MobileSimulationProfile from "./simulation/MobileSimulationProfile";
import MobileRangeSimulator from "./simulation/MobileRangeSimulator";
import OfferDetailsPage from "./simulation/OfferDetailsPage";
import FixedInternetPage from "./simulation/FixedInternetPage";
import PageWrapper from "./pages/PageWrapper";

const AppHome = () => {
  const [currentPage, setCurrentPage] = useState("accueil");
  // --- NOUVEAU : On stocke la page précédente ici ---
  const [previousPage, setPreviousPage] = useState("accueil");

  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedOffer, setSelectedOffer] = useState(null);

  const [chatHistory, setChatHistory] = useState([
    {
      role: "assistant",
      text: "Bonjour. Je suis l'expert de l'Autorité de Régulation.",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isLoading]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const toggleAIModal = () => setIsAIModalOpen(!isAIModalOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const startComparison = (profile) => {
    setSelectedProfile(profile);
    setCurrentPage("resultats-comparaison");
  };

  const askGemini = async () => {
    /* ... ton code AI ... */
  };

  // --- FONCTION UTILITAIRE POUR ALLER AUX DÉTAILS ---
  // Cette fonction sauvegarde la page actuelle avant de changer
  const handleSeeDetails = (offer) => {
    setSelectedOffer(offer);
    setPreviousPage(currentPage); // On mémorise d'où on vient (ex: 'simulation-gamme')
    setCurrentPage("details-offre");
  };

  const renderPage = () => {
    switch (currentPage) {
      // 1. RÉSULTATS COMPARATEUR CLASSIQUE
      case "resultats-comparaison":
        return (
          <ComparisonResultsPage
            profile={selectedProfile}
            onBack={() => setCurrentPage("accueil")} // Ou 'simulation-mobile' si tu veux revenir au formulaire
            onSeeDetails={handleSeeDetails} // Utilise la nouvelle fonction
          />
        );

      // 2. DÉTAILS OFFRE (CORRIGÉ)
      case "details-offre":
        return (
          <OfferDetailsPage
            offer={selectedOffer}
            // --- CORRECTION ICI : On utilise previousPage ---
            onBack={() => setCurrentPage(previousPage)}
          />
        );

      // 3. SIMULATEUR PAR GAMME
      case "simulation-gamme":
        return (
          <MobileRangeSimulator
            onBack={() => setCurrentPage("accueil")}
            onStart={(offerOrProfile) => {
              if (offerOrProfile.price) {
                // Si c'est une offre directe, on va aux détails
                handleSeeDetails(offerOrProfile);
              } else {
                // Si c'est un profil, on lance le comparateur
                startComparison(offerOrProfile);
              }
            }}
          />
        );

      // 4. SIMULATEUR AVANCÉ (FORMULAIRE)
      case "simulation-mobile":
        return (
          <ComparisonResultsPage
            // Si tu as un profil enregistré, passe-le ici, sinon ça prendra les valeurs par défaut
            profile={selectedProfile}
            onBack={() => setCurrentPage("accueil")}
            // --- C'EST LA LIGNE QUI MANQUAIT ET QUI FAIT CRASHER ---
            onSeeDetails={handleSeeDetails}
          />
        );

      // 5. INTERNET FIXE
      case "comparateur-fixe":
        return (
          <FixedInternetPage
            onBack={() => setCurrentPage("accueil")}
            onSeeDetails={handleSeeDetails} // Utilise la nouvelle fonction
          />
        );

      case "guide":
        return <GuidePage />;
      case "actualites":
        return <ActualitesPage />;

      // ACCUEIL
      default:
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 -mt-12 md:-mt-20 mb-20 md:mb-32 relative z-20">
              <div className="grid lg:grid-cols-2 gap-6 md:gap-10">
                <ServiceCard
                  icon={Smartphone}
                  title="Forfait Mobile"
                  description="Évaluez les offres mobiles selon votre usage réel."
                  features={["Saisie Précise", "Analyse Data/Go", "Volume SMS"]}
                  buttonText="Définir mon profil"
                  variant="navy"
                  subOptionsDescription="Préférez-vous un profil standardisé rapide ou une configuration technique sur-mesure ?"
                  onAction={() => setCurrentPage("simulation-mobile")}
                  // subOptions={[
                  //   {
                  //     label: "Par Gamme",
                  //     subLabel: "Profils Types (Rapide)",
                  //     icon: Layers,
                  //     color: "#00A5D4",
                  //     onClick: () => setCurrentPage("simulation-gamme"),
                  //   },
                  //   {
                  //     label: "Mode Avancé",
                  //     subLabel: "Configuration Expert",
                  //     icon: Sliders,
                  //     color: "#116984",
                  //     onClick: () => setCurrentPage("simulation-mobile"),
                  //   },
                  // ]}
                />

                <ServiceCard
                  icon={Router}
                  title="Internet Fixe"
                  description="Comparez les débits réels de la fibre et les frais d'installation."
                  features={["Débit Garanti", "Frais d'accès", "Fibre Optique"]}
                  buttonText="Comparer le fixe"
                  variant="orange"
                  onAction={() => setCurrentPage("comparateur-fixe")}
                  // isPopular={true}
                />
              </div>
              {/* <ModernSeparator icon={ShieldCheck} /> */}
              {/* <ProtectionSection /> */}
            </main>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-600 overflow-x-hidden">
      <Header
        onOpenAI={toggleAIModal}
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

      {renderPage()}

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default AppHome;
