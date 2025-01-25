import React from "react";
import Instagram from "../../assets/instagram.png";
import Social from "../../assets/social.png";
import Gmail from "../../assets/gmail.png";
import Facebook from "../../assets/facebook .png";
import Linkedin from "../../assets/linkedin.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-main-color font-poppins text-white">
      <div className=" bg-ternary-color py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <p className="tracking-ultraWide text-2xl font-semibold italic ml-80 py-6">
            Rejoignez-nous pour une meilleure éducation !
          </p>
        </div>
      </div>

      <div className=" container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold text-lg mb-4">Accueil</h3>
          <ul className="space-y-2">
            <li>À propos</li>
            <li>Trouver un professeur</li>
            <li>Devenir Professeur</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <img src={Gmail} alt="Email Icon" className="w-5 h-5" />
              support@teacher-dz.com
            </li>
            <li className="flex items-center gap-2">
              <img src={Social} alt="WhatsApp Icon" className="w-5 h-5" />
              +213 (0) XXX-XXX-XXX
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold text-lg mb-4">Social Media</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <img src={Facebook} alt="Facebook Icon" className="w-5 h-5" />
              Facebook
            </li>
            <li className="flex items-center gap-2">
              <img src={Instagram} alt="Instagram Icon" className="w-5 h-5" />
              Instagram
            </li>
            <li className="flex items-center gap-2">
              <img src={Linkedin} alt="LinkedIn Icon" className="w-5 h-5" />
              LinkedIn
            </li>
          </ul>
        </div>
      </div>
      <p className="mb-[-16px] mt-4 text-center">
        Paiements sécurisés | Enseignants vérifiés | Confiance garantie
      </p>

      {/* Bottom Section */}
      <div className="bg-dark text-sm text-center py-4 mt-8">
        <p>© 2024 Teacher-DZ. Tous droits réservés.</p>
        <p>
          <a href="#" className="underline">
            Politique de Confidentialité
          </a>{" "}
          |{" "}
          <a href="#" className="underline">
            Conditions d'Utilisation
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
