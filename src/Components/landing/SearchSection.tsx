import React from "react";
import Outline from "../../assets/Vector.png";

const willayas = [
  "Adrar",
  "Chlef",
  "Laghouat",
  "Oum El Bouaghi",
  "Batna",
  "Béjaïa",
  "Biskra",
  "Béchar",
  "Blida",
  "Bouira",
  "Tamanrasset",
  "Tébessa",
  "Tlemcen",
  "Tiaret",
  "Tizi Ouzou",
  "Alger",
  "Djelfa",
  "Jijel",
  "Sétif",
  "Saïda",
  "Skikda",
  "Sidi Bel Abbès",
  "Annaba",
  "Guelma",
  "Constantine",
  "Médéa",
  "Mostaganem",
  "M'Sila",
  "Mascara",
  "Ouargla",
  "Oran",
  "El Bayadh",
  "Illizi",
  "Bordj Bou Arréridj",
  "Boumerdès",
  "El Tarf",
  "Tindouf",
  "Tissemsilt",
  "El Oued",
  "Khenchela",
  "Souk Ahras",
  "Tipaza",
  "Mila",
  "Aïn Defla",
  "Naâma",
  "Aïn Témouchent",
  "Ghardaïa",
  "Relizane",
  "Timimoun",
  "Bordj Badji Mokhtar",
  "Ouled Djellal",
  "Béni Abbès",
  "In Salah",
  "In Guezzam",
  "Touggourt",
  "Djanet",
  "El M'Ghair",
  "El Menia",
];

const SearchSection: React.FC = () => {
  return (
    <div className="h-[630px] relative overflow-hidden bg-secondary-color flex items-center justify-start">
      <img
        src={Outline}
        alt="Map outline"
        className="absolute top-[-50px] right-[10px]"
      />

      <div className="flex-col pl-16">
        <h1 className="text-4xl font-poppins font-medium text-main-color mb-4">
          ENSEIGNANT
        </h1>
        <h1 className="text-4xl font-poppins font-medium text-main-color mb-4">
          PRÈS DE CHEZ VOUS
        </h1>
        <div className="text-gray-500font-roboto">
          <p className="ml-3 ">
            Votre plateforme pour trouver des professeurs de
          </p>
          <p className="mb-8">confiance en un clic.</p>
        </div>

        {/* Form */}
        <form>
          <div className="w-[300px] mb-5 space-y-4 text-[#333333D9]">
            <select
              style={{
                appearance: "none",
              }}
              className="w-full h-[40px] px-4 py-2 border rounded-lg bg-secondary-color border-[#333333D9]"
            >
              <option value="">Sélectionnez votre Willaya...</option>
              {willayas.map((willaya, index) => (
                <option key={index} value={willaya}>
                  {index + 1}. {willaya}
                </option>
              ))}
            </select>
            <select
              className="w-full h-[40px] px-4 py-2 border rounded-lg bg-secondary-color border-[#333333D9]"
              style={{
                appearance: "none",
              }}
            >
              <option value="">Sélectionnez votre niveau...</option>
              <option value="primaire">Primaire</option>
              <option value="secondaire">Secondaire</option>
              <option value="supérieur">Supérieur</option>
            </select>
            <select
              style={{
                appearance: "none",
              }}
              className="w-full h-[40px] px-4 py-2 border rounded-lg bg-secondary-color border-[#333333D9]"
            >
              <option value="">Sélectionnez la matière...</option>
              <option value="maths">Mathématiques</option>
              <option value="francais">Français</option>
              <option value="science">Sciences</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-44 bg-main-color font-poppins text-xl tracking-wider text-white ml-8 py-2 rounded-2xl hover:bg-teal-600"
          >
            Rechercher
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchSection;
