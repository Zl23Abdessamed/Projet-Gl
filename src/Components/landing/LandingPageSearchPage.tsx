import { useState } from "react";
import { Level, CourseType, SubjectNames, Primary, CEM, Lycee } from "../../Types/constants";
import TeacherCard from "../main/Teacher/TeacherCard";
import { Dropdown } from "../../Pages/main/Student/StudentPayments";

const willayas = [
  "tous",
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

const LandingPageSearchPage = () => {
  const [selectedWilaya, setSelectedWilaya] = useState("tous");
  const [selectedLevel, setSelectedLevel] = useState("tous");
  const [selectedYear, setSelectedYear] = useState("tous");
  const [selectedSubject, setSelectedSubject] = useState("tous");
  const [price, setPrice] = useState("");

  const teachers = [
    {
      name: "Alice Johnson",
      level: [Level.primary, Level.cem],
      location: "Alger",
      subject: [SubjectNames.math, SubjectNames.phys],
      experience: "5 years",
      diploma: "Master's in Education",
      available: CourseType.online,
      tarifs: ["2000 DZD/hour"],
      contacts: {
        phone: "555-123-4567",
        email: "alice.johnson@example.com",
      },
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Bob Smith",
      level: [Level.university],
      location: "Oran",
      subject: [SubjectNames.english, SubjectNames.science],
      experience: "10 years",
      diploma: "PhD in Science",
      available: CourseType.local,
      tarifs: ["3000 DZD/hour"],
      contacts: {
        phone: "555-987-6543",
        email: "bob.smith@example.com",
      },
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Catherine Lee",
      level: [Level.primary],
      location: "Blida",
      subject: [SubjectNames.arab, SubjectNames.francais],
      experience: "3 years",
      diploma: "Bachelor's in Arts",
      available: CourseType.online,
      tarifs: ["1500 DZD/hour"],
      contacts: {
        phone: "555-555-1212",
        email: "catherine.lee@example.com",
      },
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  const getYearOptions = () => {
    if (selectedLevel === Level.primary) return ["tous", ...Object.values(Primary)];
    if (selectedLevel === Level.cem) return ["tous", ...Object.values(CEM)];
    if (selectedLevel === Level.lycee) return ["tous", ...Object.values(Lycee)];
    return ["tous"];
  };

  const filterTeachers = () => {
    return teachers.filter((teacher) => {
      const matchesWilaya =
        selectedWilaya === "tous" || teacher.location === selectedWilaya;
      const matchesLevel =
        selectedLevel === "tous" || teacher.level.includes(selectedLevel as Level);
      const matchesYear =
        selectedYear === "tous" ||
        (selectedLevel === Level.primary && teacher.level.includes(Level.primary) && Object.values(Primary).includes(selectedYear as Primary)) ||
        (selectedLevel === Level.cem && teacher.level.includes(Level.cem) && Object.values(CEM).includes(selectedYear as CEM)) ||
        (selectedLevel === Level.lycee && teacher.level.includes(Level.lycee) && Object.values(Lycee).includes(selectedYear as Lycee));
      const matchesSubject =
        selectedSubject === "tous" || teacher.subject.includes(selectedSubject as SubjectNames);
      const matchesPrice =
        price === "" || teacher.tarifs.some((tarif) => parseInt(tarif.replace(/\D+/g, "")) <= parseInt(price));

      return (
        matchesWilaya &&
        matchesLevel &&
        matchesYear &&
        matchesSubject &&
        matchesPrice
      );
    });
  };

  const filteredTeachers = filterTeachers();

  return (
    <div className="py-24 w-11/12 mx-auto">
      <h2 className="text-3xl font-semibold text-ternary-extra-light-color mb-6">
        Résultats de votre Recherche
      </h2>
      <p className="text-xl font-normal pl-8 mb-6">Comparez et choisissez le meilleur</p>
      <div className="flex items-center flex-wrap gap-8 mb-6">
        {/* Wilaya Dropdown */}
        <Dropdown
          title="Wilaya"
          options={willayas}
          selected={selectedWilaya}
          setSelected={setSelectedWilaya}
        />

        {/* Level Dropdown */}
        <Dropdown
          title="Niveau"
          options={["tous", ...Object.values(Level)]}
          selected={selectedLevel}
          setSelected={(value) => {
            setSelectedLevel(value);
            setSelectedYear("tous"); // Reset year selection when level changes
          }}
        />

        {/* Year Dropdown */}
        <Dropdown
          title="Année"
          options={getYearOptions()}
          selected={selectedYear}
          setSelected={setSelectedYear}
        />

        {/* Subject Dropdown */}
        <Dropdown
          title="Matière"
          options={["tous", ...Object.values(SubjectNames)]}
          selected={selectedSubject}
          setSelected={setSelectedSubject}
        />

        {/* Price Input */}
        <div
          className="relative bg-[#90CBD633] border border-ternary-color rounded-md px-4 py-2 w-72 cursor-text"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-0 left-2 text-xs text-gray-700 font-medium">
            Prix (DZD)
          </div>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Entrez un prix"
            className="w-full bg-transparent outline-none text-lg font-medium"
          />
        </div>
      </div>

      <div className="flex items-center flex-wrap gap-6">
        {filteredTeachers.map((teacher, index) => (
          <TeacherCard key={index} teacher={teacher} />
        ))}
      </div>
    </div>
  );
};

export default LandingPageSearchPage;